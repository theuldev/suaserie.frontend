import React from 'react'
import "./Carousel.css";
import "./Carousel.js";

// ícones:
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Carousel = ({ children }) => {


  // Após a conexao com o banco, o carrossél irá aceitar uma array. O MAP será contido nele.
  // Talvez nao seja uma boa ideia, coloque o MAP fora do componente mesmo. Assim, há mais controle das propriedade da série card.
// ------------


// TENTAIVA DE BAIXAR UMA BIBLIOTECA REACT DE CARD SLIDER!


// ------------


  return (
    //  Carrossél 
    <div class="card-slider-wrapper" id="va_container">
      <button class="deals-scroll-left deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowLeft /> </span>
      </button>

      <div class="slide-content va-carrousel-flexbox">

        {children}
      </div>

      <button class="deals-scroll-right deals-paddle">
        <span class="material-symbols-outlined"> <AiOutlineArrowRight /> </span>
      </button>
    </div>
  )
}

export default Carousel;