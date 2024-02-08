// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/autoplay'; // Import Swiper autoplay styles
// import SwiperCore from 'swiper';
// import slide1 from "../../Images/slide1.png";
// import slide2 from "../../Images/slide2.jpg";
// import slide3 from "../../Images/slide3.jpg";
// import slide4 from "../../Images/slide4.jpg";
// import './slider.css';

// SwiperCore.use([Autoplay]);
// function Slider() {
//   const slides = [
//     {
//       id: 1,
//       title: "title 1",
//       content: `img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text     
//       Line 17:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text     
//       Line 21:17:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text `,
//       button: "view more",
//       image: slide1 // Use the imported slide1 directly
//     },
//     {
//       id: 2,
//       title: "title 2",
//       content: "content 2 da",
//       button: "view more",
//       image: slide2 // Use the imported slide2 directly
//     },
//     {
//       id: 3,
//       title: "title 3",
//       content: "content 3 da",
//       button: "view more",
//       image: slide3 // Use the imported slide3 directly
//     },
//     {
//       id: 4,
//       title: "title 4",
//       content: "content 4 da",
//       button: "view more",
//       image: slide4 // Use the imported slide4 directly
//     },
//   ];

//   return (
//     <Swiper
//       spaceBetween={50}
//       slidesPerView={1}
//       autoplay={{ delay: 3000 }} // Specify the delay for autoplay in milliseconds
//       className='slider_container'
//     >
//        {slides.map((slideContent) => (
//         <SwiperSlide key={slideContent.id}>
//           <div className='cont_slider'>
//             <div className='grouped_home'>
//                 <h2 className='title'>{slideContent.title}</h2>
//                 <p className='content'>{slideContent.content}</p>
//                 <button className='button'>{slideContent.button}</button>
//             </div>
//             <img src={slideContent.image} className="image" alt={slideContent.title} />
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// }

// export default Slider;

import React, { useState, useEffect } from 'react';
import './slider.css';
import BtnSlider from './BtnSlider';
import slides from './DataSlider'; // Import the slides array

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== slides.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === slides.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(slides.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div className="container-slider">
      {slides.map((obj, index) => (
        <div
          key={obj.id}
          className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}
        >
          <img className='img_slide' src={obj.image} alt={`Slide ${obj.id}`} />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />

      <div className="container-dots">
        {Array.from({ length: slides.length }).map((_, index) => (
          <div
            key={index}
            onClick={() => moveDot(index + 1)}
            className={slideIndex === index + 1 ? 'dot active' : 'dot'}
          ></div>
        ))}
      </div>
    </div>
  );
}


