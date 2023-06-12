import React from 'react'
import "./SerieCard.css";
import images from '../../../constants/images';

// ícones:
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  MdOutlineSentimentVerySatisfied,
  MdDoneAll,
  MdOutlineHotelClass,
  MdOutlineSentimentVeryDissatisfied,
} from "react-icons/md";

const SerieCard = (props) => {

  // Possuirá uma propriedade que leva à páginade visualização de série com seu id especifico
  return (
    <div class="card-slide va-card">
      <div class="img-title">
        <img
          src={images.anne}
          alt="Imagem promocional da série"
        />

        <span class="series-title">Lupin</span>
      </div>

      <div class="info-series">
        <div class="avaliacao">
          <span class="material-icons-outlined" id="star-checked">

            <AiOutlineStar fill='red' />
          </span>
          <span class="material-icons-outlined" id="star-checked">
            <AiOutlineStar fill='yellow' />
          </span>
          <span class="material-icons-outlined" id="star-checked">
            <AiOutlineStar fill='yellow' />

          </span>
          <span class="material-icons-outlined" id="">         <AiOutlineStar fill='red' />
          </span>
          <span class="material-icons-outlined" id="">         <AiOutlineStar fill='red' />
          </span>
        </div>
        <span class="year-interval">Início: 2019</span>
      </div>

      <div class="eps-temps">
        <span class="eps">10 ep(s)</span>
        <span class="temps">2 temp(s)</span>
      </div>

      <div class="series-icons">
        <span class="material-icons-outlined" id="liked">
          <MdOutlineSentimentVerySatisfied />
        </span>
        <span class="material-icons-outlined" id="disliked">
          <MdOutlineSentimentVeryDissatisfied />
        </span>
        <span class="material-icons-outlined" id="watched">
          <MdDoneAll />
        </span>
        <span class="material-icons-outlined" id="wish">
          <MdOutlineHotelClass />
        </span>
      </div>
    </div>
  )
}

export default SerieCard;