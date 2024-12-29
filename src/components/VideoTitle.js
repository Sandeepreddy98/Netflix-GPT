const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[15%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/5">{overview}</p>
      <div>
        <button className="bg-white rounded-md text-black py-2 px-8 text-xl hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 rounded-md text-white py-2 px-8 text-xl ml-4 bg-opacity-50">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
