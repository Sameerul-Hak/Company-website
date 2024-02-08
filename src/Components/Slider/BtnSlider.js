import React from "react";
import "./slider.css";
import leftArrow from "../../Images/left-arrow.svg.svg";
import rightArrow from "../../Images/right-arrow.svg.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img  className = 'arrow_img'src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}