import React, { useState } from 'react';
import Rating from 'react-rating';
import '../assets/rating.css';

function RatingComponent({ onChange }) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => {
    if (rating === value) {
      setRating(0);
      onChange(0);
    } else {
      setRating(value);
      onChange(value);
    }
  };

  return (
    <div className='mt-2 rating-container'>
    <div className='rating-stars'>
      <Rating
        emptySymbol="fa fa-star-o fa-2x rating-star"
        fullSymbol="fa fa-star fa-2x rating-star"
        fractions={1}
        step={0.5}
        initialRating={rating / 2}
        onClick={(value) => handleRatingChange(value * 2)}
      />
    </div>
  </div>
  );
}

export default RatingComponent;