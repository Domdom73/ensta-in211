import logo from './logo.svg';
import './Home.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios'
import Movie from '../../components/Movie/Movie.jsx';

const useFetchMovies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/movie/popular?api_key=a0a7e40dc8162ed7e37aa2fc97db5654`,
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return { movies };
};

function Home() {
  const [movieName, setMovieName] = useState('');
  const { movies } = useFetchMovies();

  return (
    <div className="App">
      {/*<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="input" type="text" placeholder="Movie Name" value={movieName} onChange={(event) =>
            setMovieName(event.target.value )} /> 
        <p>
          {movieName}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      <ul>
          {Array.isArray(movies) ? (
            movies.map((movie)=>(
            <li key={movie.id}>
              <h3>{movie.original_title}</h3>
              <h5>{movie.release_date}</h5>
            </li>
            ))
          ):(<p>Loading...</p>)
          }
        </ul>

    </div>
  );
}

export default Home;
