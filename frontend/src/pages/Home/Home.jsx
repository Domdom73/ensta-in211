import logo from './logo.svg';
import './Home.css';
import React, { useState } from 'react';
import {useEffect} from 'react';

function Home() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies]=useState(0);
  useEffect(()=>{
    return (<p>Bonjour</p>)=>{}
  }, [])
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default Home;
