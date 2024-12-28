import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './Signup'

const Body = () => {
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

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    )
}

export default Body