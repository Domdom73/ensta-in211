import './Home.css';
import React, { useState } from 'react';
import {useEffect} from 'react';
import axios from 'axios'
import Movie from '../../components/Movie/Movie.jsx';
import MovieDetails from '../../components/MovieDetails/MovieDetails.jsx';
import {Link} from 'react-router-dom'

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
  const {movies} = useFetchMovies();
  return (
    <div className="App">
      <ul>
          {Array.isArray(movies) ? (
            movies.map((movie)=>(
              <li key={movie.id}>
                <Link 
                  to={{
                    pathname:`/movie/${movie.id}`,
                    state: {movie: movie}
                  }}>
                  <h3>{movie.original_title}</h3>
                </Link>
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
