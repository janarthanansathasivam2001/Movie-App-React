import React, {useState , useContext} from 'react';
import GenereFilter from '../components/GenereFilter';
import MovieCard from '../components/Moviecard';
import { WatchListContext } from '../context/WatchContext';


const WatchList = () => {

const { watchLists , genreList } = useContext(WatchListContext);
const [search, setSearch] = useState("");
const [selectedGenre , setSelectedGenre] = useState("")

const filteredMovie = watchLists.filter((movie) => {
  const matchesSearch =
    movie.title?.toLowerCase().includes(search.toLowerCase()) ||
    (movie.overview || "").toLowerCase().includes(search.toLowerCase());

  const matchesGenre =
    !selectedGenre || movie.genre_ids.includes(Number(selectedGenre));

  return matchesSearch && matchesGenre;
});





  return (
    <div className='p-4 pt-16'>
      <div className='search-bar mt-5 text-center fixed top-14 z-50 w-full'>
        <input type="text" placeholder='Search Movies' 
         onChange={(event) => {
          setSearch(event.target.value)}}
        className='border border-slate-900 bg-opacity-70 bg-gray-700 rounded w-3/4 md:w-1/2 p-3 mx-auto backdrop-blur-lg text-white'/>
      </div>
      <div className='m-4 mt-24 w-fit p-2 mx-auto'>
        <GenereFilter genreList={genreList || []} setSelectedGenre = {setSelectedGenre} />
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5 '>
        {filteredMovie?.map((movies) => {
          return(
            <MovieCard key={movies.id} movies={movies} />
          )

        })}
      </div>

    </div>
  )
}

export default WatchList
