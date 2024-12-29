import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./header"
import PrimaryConatiner from "./PrimaryContainer"

const Browse = () => {
    useNowPlayingMovies()

    return (
        <div>
            <Header/>
            <PrimaryConatiner/>
        </div>
    )
}

export default Browse