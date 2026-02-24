import React , {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import WatchList from './WatchList';
import { WatchListContext } from '../context/WatchContext';

const Navbar = () => {
const {watchLists} = useContext(WatchListContext)

  return (
    <div className='bg-slate-800 flex justify-between text-white font-bold p-4 text-2xl fixed t-0 w-full z-50'>
      <Link to = '/'> 📽 Movie App</Link>
      <Link to='/watchlist'>WatchList ({watchLists.length})</Link>

      
    </div>
  )
}

export default Navbar
