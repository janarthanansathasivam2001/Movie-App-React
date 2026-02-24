import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import WatchList from "./pages/WatchList";
import WatchContext from './context/WatchContext';

const App = () => {
  return (
    <div>
      <WatchContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/watchlist" element={<WatchList />} />
          </Routes>
        </BrowserRouter>
      </WatchContext>
    </div>
  );
};

export default App;
