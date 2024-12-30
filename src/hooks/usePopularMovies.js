import axios from "axios";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux-store/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  
  const getPopularMOvies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        TMDB_OPTIONS
      );
      dispatch(addPopularMovies(response.data.results));
    } catch (error) {
      console.error("Fetching Popular ==> ", error.message);
    }
  };

  useEffect(() => {
    getPopularMOvies()
  },[])
};

export default usePopularMovies;
