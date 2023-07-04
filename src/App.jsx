import React, { useState } from 'react';
import Hero from './components/Hero';
import RatingComponent from './components/Rating';
import MovieList from './components/MovieList';
import Error404 from './components/Error404';
import SobreNosotros from './components/SobreNosotros';
import Buscador from './components/Buscador';

import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  const [filterRating, setFilterRating] = useState(0);

  const handleRatingChange = (rating) => {
    setFilterRating(rating);
  };


  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Hero />
              <div className='d-flex justify-content-center ratingdiv'>
                <p className='ParrafoRating text-white'>
                  Filtrar por rating:
                  <span className='RatingMargin'></span>
                  <span className='RatingMargin'>
                    <RatingComponent onChange={handleRatingChange} />
                  </span>
                </p>
              </div>
              <MovieList filterRating={filterRating} />
            </div>
          }
        />
        <Route
          path="/pelicula/:id"
          element={
            <div>
              <Hero />
            </div>
          }
          />
        <Route path="/movie/:id" element={<Navigate to="/pelicula/:id" />} />
        <Route path="/inicio" element={<Navigate to="/home" />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path='/buscar' element={
        <div>
        <Hero/>
        <Buscador />
        </div>
      } 
      />
       </Routes>
      
    </div>
  );
}

export default App;