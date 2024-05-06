function Movie() {
  const {movies} = useFetchMovies();
  return (
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
  );
  

}

export default Movie;
