
const GPTSearchBar = () => {
    return(
        <div className="pt-[10%] flex justify-center">
            <div className="w-1/2 bg-black grid grid-cols-12">
            <input type="text" placeholder="What would you like to watch today?" className="col-span-9 p-4 m-4 rounded-lg"/>
            <button className="bg-red-600 hover:bg-red-700 rounded-lg text-slate-50 font-semibold col-span-3 px-4 py-2 m-4">Search</button>
            </div>
        </div>
    )
}

export default GPTSearchBar