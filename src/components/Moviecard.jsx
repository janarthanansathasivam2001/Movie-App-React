import React , {useContext} from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { WatchListContext } from "../context/WatchContext";

const MovieCard = ({ movies }) => {
   const {toggleWatchList , watchLists} =  useContext(WatchListContext)

   const inWatchList = watchLists?.some(m => m.id === movies?.id) || false;
  return (
    <div className="p-2 m-5 mt-16">
      <div className="bg-slate-950 p-10  w-72 h-[450px] relative rounded-lg ">
        <img className="w-full  object-contain" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} />
        <h1 className="text-white text-xl mt-3">{movies.title}</h1>
        <p className="text-white text-xl">{movies.release_date}</p>
        <button className="absolute top-2 right-3 text-red-500 text-xl" 
        onClick={() => toggleWatchList(movies)}>
          {inWatchList ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
