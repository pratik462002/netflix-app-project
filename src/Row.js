import React from "react";
import "./Row.css";
import axios from "./axios";
import requests from "./Requests";
import { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movie);
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="rowPosters">
        {movie.map((movie) => (
          
          < >
          <img
            className={`row_poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
          {/* <div className="blurrbox">
            <p className="smallname">
              {movie.original_title}
            </p>
          </div> */}
          </>
        ))}
        
      </div>
    </div>
  );
}

export default Row;
