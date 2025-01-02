import axios from "axios"
import { TMDB_OPTIONS } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUpComingMovies } from "../utils/redux-store/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
    const { upComingMovies } = useSelector(store => store.movies)
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',TMDB_OPTIONS)
            dispatch(addUpComingMovies(response.data.results))
        } catch (error) {
            console.error("Fetching UpcomingMovies ==> ", error.message);
        }
    }

    useEffect(() => {
        if(!upComingMovies) getUpcomingMovies()
    },[])
}

export default useUpcomingMovies