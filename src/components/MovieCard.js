import { TMDB_POSTERPATH_CDN } from "../utils/constants"

const MovieCard = ({title,poster_path}) => {

    return (
        <div className="w-36">
            <img alt={title} src={TMDB_POSTERPATH_CDN + poster_path} />
        </div>
    )
}

export default MovieCard