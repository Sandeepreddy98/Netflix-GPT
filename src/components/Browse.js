import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import Header from "./header"
import PrimaryConatiner from "./PrimaryContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMovies()
    return (
        <div style={{scrollbarWidth : "none"}}>
            <Header/>
            <PrimaryConatiner/>
            <div className="bg-black">
            <SecondaryContainer/>
            </div>
        </div>
    )
}

export default Browse