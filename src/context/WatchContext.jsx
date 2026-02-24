import React, { createContext, useContext, useState , useEffect } from "react";

const WatchListContext = createContext();

const WatchContext = ({children}) => {
  const [watchLists, setWatchLists] = useState([]);
  const [genreList, setGenreList] =  useState([])

  useEffect(() => {
      let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=0a66b8d659c279579b4c12602d9bef7d`
      
      fetch(url)
      .then((response) => response.json())
      .then((data) => setGenreList(data.genres || []))
    },[genreList])
  

  const toggleWatchList = (movies) => {
    const index = watchLists.findIndex((m) =>m.id === movies.id )

    if(index === -1){
        setWatchLists([...watchLists , movies])
    }
    else{
        setWatchLists([...watchLists.slice(0 , index), ...watchLists.slice(index+1)])
    }
  }

  

  return (
    <WatchListContext.Provider value={{ watchLists, setWatchLists , toggleWatchList , genreList}} >
      {children}
    </WatchListContext.Provider>
  );
};

export default WatchContext;
export {WatchListContext};
