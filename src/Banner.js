import "./Banner.css";
import requests from "./Requests";
import React, { useEffect, useState } from "react";
import axios from "./axios";
const base_url = "https://image.tmdb.org/t/p/original/";

function Banner() {
  // const [movie, setMovie] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const request = await axios.get(requests.fetchNetflixOriginals);
  //     setMovie(
  //       request.data.results[
  //         Math.floor(Math.random() * request.data.results.length - 1)
  //       ]
  //     );
  //     // return request;
  //   }
  //   fetchData();
  // }, []);

  // console.log(movie)

  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchMovie() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      ); // using prettier
    }
    fetchMovie();
  }, []);
  console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,

        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">{movie?.name}</h1>
        <button className="bannerButton">Play</button>
        <button className="bannerButton">My List</button>
        <h1 className="bannerDiscription">
          {truncate(
            `${movie?.overview}`,
            100
          )}
        </h1>
      </div>
      <div className="bannerFadeBottom"></div>
    </header>
  );
}
export default Banner;
