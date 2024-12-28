import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase/firebase'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/redux-store/userSlice'

const Body = () => {
    const dispatch = useDispatch()

    const appRouter = createBrowserRouter([
        {
            path : '',
            element : <Login/>
        },
        {
            path :'/login',
            element : <Login/>
        },
        {
            path : '/signup',
            element : <Signup/>
        },
        {
            path : '/browse',
            element : <Browse/>
        }
    ])

    useEffect(() => {
      // Listen for authentication state changes
      onAuthStateChanged(auth, (user) => {
        if (user) {
            // const {uid ,email,displayName} = user
            // dispatch(adduser({uid : uid,email : email,displayName : displayName}))
        } else {
            dispatch(removeUser())
        }
      });
    }, []);
    
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body