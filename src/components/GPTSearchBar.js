import { useRef } from "react"
import openai from '../utils/openAI/setup';
import axios from "axios";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from '../utils/redux-store/gptSlice'
const GPTSearchBar = () => {
    const gptSearchText = useRef(null);
    const dispatch = useDispatch()

    const handleGPTSearch = async () => {
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        gptSearchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
        const tmdbResults = await Promise.all(promiseArray)
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }))
    }

    const searchMovieTMDB = async (movie) => {
        const data = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`)
        return data.results
    }

    return(
        <div className="pt-[10%] flex justify-center">
            <div className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder="What would you like to watch today?" className="col-span-9 p-4 m-4 rounded-lg" ref={gptSearchText}/>
            <button className="bg-red-600 hover:bg-red-700 rounded-lg text-slate-50 font-semibold col-span-3 px-4 py-2 m-4" onClick={handleGPTSearch}>Search</button>
            </div>
        </div>
    )
}

export default GPTSearchBar