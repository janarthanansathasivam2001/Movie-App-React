import React from 'react'

const GenereFilter = ({genreList = [] , setSelectedGenre} ) => {
  return (
    <select className='bg-slate-800 p-2 border border-gray-400 text-white' 
    onChange={(e) => setSelectedGenre(e.target.value)}>
        <option>All Generes</option>
        {genreList.map((genre) => {
            return(
                
                <option key={genre.id} value={genre.id}>{genre.name}</option>
            )
        })}
    </select>
  )
}

export default GenereFilter
