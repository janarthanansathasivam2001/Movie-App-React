import React, { useState , useEffect } from 'react';
import MovieCard from '../components/Moviecard';




const Home = () => {

  const [movieList , setMovieList] = useState([])
  const [page, setPgae] = useState(1)
  const [search, setSearch] = useState("")

  useEffect(() => {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=0a66b8d659c279579b4c12602d9bef7d&page=${page}`
    if(search){
      url = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=0a66b8d659c279579b4c12602d9bef7d`

    }
    fetch(url)
    .then((response) => response.json())
    .then((data) => setMovieList(data.results))
  },[page,search])


  return (
    <div className='p-4 pt-16'>
      <div className='search-bar mt-5 text-center fixed top-14 z-50 w-full'>
        <input type="text" placeholder='Search Movies'
        onChange={(event) => {
          setSearch(event.target.value)
        }}
        className='border border-slate-900 bg-opacity-70 bg-gray-700 rounded w-3/4 md:w-1/2 p-3 mx-auto backdrop-blur-lg text-white'/>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-5 '>
        {movieList.map((movies) => {
          return(
            <MovieCard key={movies.id} movies={movies} />
          )

        })}
      </div>
      <div className='pagination flex justify-between m-5'>
        <button 
        disabled={page==1}
        className='bg-slate-800 rounded-xl px-5 py-3 text-2xl text-white font-semibold' onClick={() => {
          setPgae((prev) => prev-1)
        }}>Prev</button>
        <button className='bg-slate-800 rounded-xl px-5 py-3 text-2xl text-white font-semibold'
        onClick={() => {
          setPgae((prev) => prev+1)
        }}
        >Next</button>

      </div>
    
      
    </div>
  )
}

export default Home
