import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/buscar.css';

function Buscador() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      searchMovies();
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const searchMovies = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c4b7407aaa2f93146cf47ab3633f479d&query=${searchTerm}`
      );
      const data = await response.json();
      setSearchResults(data.results);
    } catch (error) {
      console.log('Error searching movies:', error);
    }

    setIsLoading(false);
  };

  return (
    <div className='divLoader buscador-container'>
      <div id="wifi-loader">
        <svg className="circle-outer" viewBox="0 0 86 86">
          <circle className="back" cx="43" cy="43" r="40"></circle>
          <circle className="front" cx="43" cy="43" r="40"></circle>
          <circle className="new" cx="43" cy="43" r="40"></circle>
        </svg>
        <svg className="circle-middle" viewBox="0 0 60 60">
          <circle className="back" cx="30" cy="30" r="27"></circle>
          <circle className="front" cx="30" cy="30" r="27"></circle>
        </svg>
        <svg className="circle-inner" viewBox="0 0 34 34">
          <circle className="back" cx="17" cy="17" r="14"></circle>
          <circle className="front" cx="17" cy="17" r="14"></circle>
        </svg>
        <div className="text" data-text="Buscador..."></div>
      </div>
      <div className="inputbox">
        <input
          required="required"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <i></i>
      </div>
      <div className="search-results">
        {isLoading ? (
          <div>Loading...</div>
        ) : searchResults.length > 0 ? (
          searchResults.map((movie) => (
            <Link key={movie.id} to={`/pelicula/${movie.id}`} className='search-result-link'>
              <div className="search-result rounded">
                <img
                  className="search-result-poster"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="search-result-title" style={{ textDecoration: 'none' }}>{movie.title}</p>
              </div>
            </Link>
          ))
        ) : (
            searchTerm.length > 0 && <div className="text-white mb-2 texterror">No se encontraron películas con el título buscado.</div>
          )}
      </div>
    </div>
  );
}

export default Buscador;