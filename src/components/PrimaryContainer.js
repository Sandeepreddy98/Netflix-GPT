import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"

const PrimaryConatiner = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    if(!movies) return
    const {original_title,overview,id} = movies[Math.floor(Math.random()*10)]
    return (
        <div>
            <VideoTitle title = {original_title} overview = {overview}/>
            <VideoBackground movieId = {id}/>
        </div>
    )
}

export default PrimaryConatiner