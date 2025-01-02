import axios from "axios";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/redux-store/movieSlice";

const useTopRatedMovies = () => {
  const {topRatedMovies} = useSelector(store => store.movies)
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        TMDB_OPTIONS
      );
      dispatch(addTopRatedMovies(response.data.results));
    } catch (error) {
      console.error("Fetching TopRatedMovies ==> ", error.message);
    }
  };

  useEffect(() => {
    if(!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
