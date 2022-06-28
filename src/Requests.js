

const API_KEY = "7092d1cc717e2bb2273571f0cd1dcba8";

const requests = {
  fetchTrending: `trending/all/day?api_key=${API_KEY}&language=hi-IN`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=hi-IN`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentriesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;


// https://api.themoviedb.org/3/discover/movie?api_key=${7092d1cc717e2bb2273571f0cd1dcba8}&with_genres=99