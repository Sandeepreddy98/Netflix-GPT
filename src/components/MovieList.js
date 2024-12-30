import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="ml-12 py-2">
      <h1 className="text-white capitalize">{title.split(/(?=[A-Z])/).join(" ")}</h1>
      <div className="flex overflow-x-auto scroll-auto" style={{scrollbarWidth : "none"}}>
        {movies?.map((movie) => (
          <div className="py-4 pr-3">
            <MovieCard
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
            />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
