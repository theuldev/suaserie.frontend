import React from 'react'
import "./Carousel.css";
import "./Carousel.js";
import { useRef } from 'react';

// ícones:
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Carousel = ({ children }) => {


  // Após a conexao com o banco, o carrossél irá aceitar uma array. O MAP será contido nele.
  // Talvez nao seja uma boa ideia, coloque o MAP fora do componente mesmo. Assim, há mais controle das propriedade da série card.
// ------------
const vaCarrouselFlexbox = useRef();
const vaCardFirst = useRef();
const vaCardAll = useRef([]);
const dealsScrollLeft = useRef();
const dealsScrollRight = useRef();






// ------------


  return (
    //  Carrossél 
    <div class="card-slider-wrapper" id="va_container">
      <button   ref={dealsScrollLeft} class="deals-scroll-left deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowLeft /> </span>
      </button>

      <div class="slide-content va-carrousel-flexbox" ref={vaCarrouselFlexbox}>

        {children}
      </div>

      <button  ref={dealsScrollRight}  class="deals-scroll-right deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowRight /> </span>
      </button>
    </div>
  )
}

export default Carousel;