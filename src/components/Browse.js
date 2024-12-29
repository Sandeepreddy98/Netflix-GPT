import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import Header from "./header"

const Browse = () => {
    useNowPlayingMovies()

    return (
        <div>
            <Header/>
        </div>
    )
}

export default Browse