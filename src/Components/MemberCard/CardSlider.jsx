import React, { useState, useEffect } from 'react';
import './CardSlider.css'; // Create a separate CSS file for styling

const CardSlider = () => {
  const logos = [
    'logo1.png', // Add your logo image paths here
    'logo2.png',
    'logo3.png',
    'logo4.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + logos.length) % logos.length);
  };

  return (
    <div className="card-slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {logos.map((logo, index) => (
          <div key={index} className="card">
            <img src={logo} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &lt;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default CardSlider;
