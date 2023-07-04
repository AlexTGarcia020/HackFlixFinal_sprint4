import React, { useEffect, useState } from 'react';
import '../assets/movie.css';
import Modal from './Modal';

function MovieList({ filterRating }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=c4b7407aaa2f93146cf47ab3633f479d&page=${currentPage}`);
      const data = await response.json();
      setMovies(data.results);
      setIsLoading(false);
    } catch (error) {
      console.log('Error fetching movies:', error);
    }
  };

  let filteredMovies = movies;

  if (filterRating > 0) {
    filteredMovies = movies.filter((movie) => Math.round(movie.vote_average) === filterRating);
  }

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const renderPageLinks = () => {
    const pageLinks = [];

    for (let i = 1; i <= 3; i++) {
      pageLinks.push(
        <li className={`page-item ${currentPage === i ? 'active' : ''}`} key={i}>
          <a className="page-link" href="#" onClick={() => setCurrentPage(i)}>
            {i}
          </a>
        </li>
      );
    }

    return pageLinks;
  };

  return (
    <div>
        <div className="card-container">
          {filteredMovies.map((movie) => (
            <div className="card" onClick={() => handleMovieClick(movie)} key={movie.id}>
              <img className="card-poster" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h6 className='justify-content-center d-flex text-titles'>{movie.title}</h6>
            </div>
          ))}
          {isModalOpen && (
            <Modal movie={selectedMovie} onClose={handleCloseModal} />
          )}
        </div>
      <nav aria-label="Page navigation example" className='d-flex justify-content-center'>
        <ul className="pagination justify-content-end">
          <li className={`page-item item2 ${currentPage === 1 ? 'disabled' : ''}`}>
            <a className="page-link" href="#" onClick={goToPreviousPage}>
              Previous
            </a>
          </li>
          {renderPageLinks()}
          <li className="page-item item1">
            <a className="page-link" href="#" onClick={goToNextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MovieList;