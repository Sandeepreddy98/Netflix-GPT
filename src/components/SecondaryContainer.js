import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const storeKeys = Object.keys(movies);
  const moviesCategory = storeKeys?.filter((key) => key !== "trailerVideo");
  return (
      <div className="-mt-80 z-50 relative">
      {moviesCategory?.map((category,index) => (
        <MovieList title={category} movies={movies[category]} key={index} />
      ))}
      </div>
  );
};

export default SecondaryContainer;
