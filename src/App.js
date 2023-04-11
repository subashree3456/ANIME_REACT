import React from "react";
import { useState, useEffect } from "react";
import "./Components/style.css";
import AnimeList from "./Components/AnimeList";

function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();

  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    // console.log(resData)
    console.log(resData.data);
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="header">
        <h1>MyAnimeList</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search your Anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">

        </div>
        <div className="anime-row">
          <div className="row">
             <AnimeList />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
