import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import React from "react";
import Summary from "./Components/Summary";
import Movies from "./Components/Movies";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movies movies={movies} />} />
        <Route path="/movie/:id" element={<Summary />} />
      </Routes>
    </div>
  );
}

export default App;
