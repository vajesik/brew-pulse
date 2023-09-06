import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home.js";
import About from "./About.js";
import TownList from "./TownList";
import Search from "./Search.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/featured_breweries" element={<TownList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
