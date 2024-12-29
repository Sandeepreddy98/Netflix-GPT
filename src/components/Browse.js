import axios from "axios"
import Header from "./header"
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from "../utils/redux-store/movieSlice"
import { useEffect } from "react"
import { options } from "../utils/constants"

const Browse = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        try{
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1',options)
            dispatch(addNowPlayingMovies(response.data.results))
        }catch(err){
            console.error("error ==> ",err.message);
        }
    }

    useEffect(() => {
        getNowPlayingMovies()
    },[])

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Browse