import GPTSearchBar from "./GPTSearchBar"
import GPTSearchSuggestions from "./GPTSearchSuggestions"
import { images } from "../utils/images/imageConstans";

const GPTSearch = () => {
    const { background } = images;
    return(
        <div
      className="bg-cover bg-center h-screen w-screen absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-90"
      style={{ backgroundImage: `url(${background})` }}
    >
            <GPTSearchBar/>
            <GPTSearchSuggestions/>
        </div>
    )
}

export default GPTSearch