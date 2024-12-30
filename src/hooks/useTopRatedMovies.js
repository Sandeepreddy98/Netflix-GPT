import axios from "axios";
import { useEffect } from "react";
import { TMDB_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/redux-store/movieSlice";

const useTopRatedMovies = () => {
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
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
