import React, { useState, useEffect } from 'react';
import Slide from './Slide';
import data from '../data';

const Slider = () => {
  // const [reviews, setReviews] = useState(data);
  const reviews = data;
  const [active, setActive] = useState(0);

  // go to next slide
  const nextSlide = () => {
    setActive((prevValue) => {
      if (prevValue + 1 > reviews.length - 1) {
        return 0;
      }
      return prevValue + 1;
    });
  };

  // go to previous slide
  const prevSlide = () => {
    setActive((prevValue) => {
      if (prevValue - 1 < 0) {
        return reviews.length - 1;
      }
      return prevValue - 1;
    });
  };

  // Slide will go to next slide after 10s
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 10000);

    // Cleanup
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <div className="container slider">
      {reviews.map((rev, i) => {
        // active ?
        let positionClass = '';
        if (i === active) {
          positionClass = 'active';
        } else if (
          i + 1 === active ||
          (active === 0 && i === reviews.length - 1)
        ) {
          positionClass = 'prev';
        } else {
          positionClass = 'next';
        }
        return (
          <Slide key={rev.id} {...rev} classes={positionClass} />
        );
      })}

      <div className="btn-group slider-btn-group">
        <button
          className="btn btn-slider prev-slider"
          onClick={prevSlide}
        >
          prev
        </button>
        <button
          className="btn btn-slider next-slider"
          onClick={nextSlide}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Slider;
