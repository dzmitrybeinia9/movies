import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=84d44b04";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    };

    useEffect(() => {
        searchMovies("movie");
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                    value={search}
                    placeholder="Search for a movie"
                    onChange={(e) => {setSearch(e.target.value)}}
                 />
                <img 
                    src={SearchIcon} 
                    alt="search" 
                    onClick={() => {searchMovies(search)}}
                />
            </div>

            {
                movies?.length > 0 ? (
                    <div className="container">
                        {movies.map((movie) => <MovieCard movie1={movie} />)}
                    </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    );
};

export default App;
