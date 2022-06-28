import React from 'react';
import "./HomeScreen.css"
import Nav from '../Nav'
import Banner from '../Banner'
import Row from '../Row'
import requests from '../Requests';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        <Nav />
        <Banner />
        <Row title='Netflix Orignals' fetchUrl={requests.fetchNetflixOriginals} 
        isLargeRow />
        <Row title='Trending Movies' fetchUrl={requests.fetchTrending} />
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
        <Row title='Horror Orignals' fetchUrl={requests. fetchHorrorMovies} />
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated} 
        isLargeRow />
        <Row title='Documentries Orignals' fetchUrl={requests.fetchDocumentriesMovies} />
    </div>
  )
}

export default HomeScreen