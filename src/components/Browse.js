import { useDispatch, useSelector } from "react-redux"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import Header from "./header"
import PrimaryConatiner from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"
import { toggleGptSearchView } from "../utils/redux-store/gptSlice"
import GPTSearch from "./GPTSearch"

const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt?.showGptSearch);
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
      <div>
        <Header />
        {showGptSearch ? (
          <GPTSearch/>
        ) : (
          <>
            <PrimaryConatiner />
            <div className="bg-black">
              <SecondaryContainer />
            </div>
          </>
        )}
      </div>
    );
}

export default Browse