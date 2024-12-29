import axios from "axios"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { TMDB_OPTIONS } from "../utils/constants"
import { addNowPlayingMovies } from "../utils/redux-store/movieSlice"

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()

    const getNowPlayingMovies = async () => {
        try{
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?page=1',TMDB_OPTIONS)
            dispatch(addNowPlayingMovies(response.data.results))
        }catch(err){
            console.error("error ==> ",err.message);
        }
    }

    useEffect(() => {
        getNowPlayingMovies()
    },[])
}

export default useNowPlayingMovies