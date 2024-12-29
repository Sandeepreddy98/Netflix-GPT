import axios from "axios"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/redux-store/movieSlice"
import { TMDB_OPTIONS } from "../utils/constants"
import { useEffect } from "react"

const useMovieTrailer = (movieId) => {
    const dispatch  = useDispatch()
    const getMovieVideos = async() => {
        try{
            const movieData = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,TMDB_OPTIONS)
            const trailerIndex = movieData.data.results.findIndex((video) => video.type === 'Trailer')
            const trailer = trailerIndex > -1 ? movieData.data.results[trailerIndex] : movieData.data.results[0]
            dispatch(addTrailerVideo(trailer))
        }catch(err){
            console.error("Message ==> ",err.message)
        }
    }

    useEffect(() => {
        getMovieVideos()
    },[])
}

export default useMovieTrailer