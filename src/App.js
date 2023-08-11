import React, { useEffect } from "react";
import SearchIcon from "./search.svg"
import "./App.css"
const Api_url = "https://www.omdbapi.com?apikey=3d493939";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${Api_url}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman")
  }, []);

  return (
    <div className="app">
      <h1>movieLand</h1>
      <div className="search">
        <input
        placeholder="search a movie "
        value="superman"
        onChange={()=>{

        }} 
        />
        <img
        src={SearchIcon}
        alt="search"
        onClick={()=>{

        }}
        />

      </div>
      <div className="container"> 

      </div>
    </div>
  );
};

export default App;
