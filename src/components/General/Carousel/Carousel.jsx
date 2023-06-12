import React from 'react'
import "./Carousel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Carousel = (props) => {
  return (
    //  Carrossél 
    <div class="card-slider-wrapper" id="va_container">
      <button class="deals-scroll-left deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowLeft /> </span>
      </button>

      <div class="slide-content va-carrousel-flexbox">

      </div>

      <button class="deals-scroll-right deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowRight /> </span>
      </button>
    </div>
  )
}

export default Carousel;