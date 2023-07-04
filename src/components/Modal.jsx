import React from 'react';
import '../assets/modal.css';

const Modal = ({ movie, onClose }) => {
  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const imgSRC = `https://image.tmdb.org/t/p/w780${movie.poster_path}`;

  return (
    <div className="modal" onClick={handleBackdropClick}>
      <div className="modal-content rounded shadow-lg">
        <div className="modal-header">
          <h2 className="modal-title">{movie.title}</h2>
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </button>
        </div>
        <div className="modal-body">
          <div className="modal-image">
            <img className="card-poster-modal" src={imgSRC} alt={movie.title} />
          </div>
          <div className="modal-info">
            <p className="modal-date">{movie.release_date}</p>
            <p className="modal-description">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;