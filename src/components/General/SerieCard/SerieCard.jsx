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
import { Link, useNavigate } from 'react-router-dom';

const SerieCard = (props) => {

  // Possuirá uma propriedade que leva à páginade visualização de série com seu id especifico
  // Usará o id da série.


  return (
    <div className={`card-slide va-card `}   >
      <div class="img-title">
        <Link to={`${props.id}`} className='serie-link'>
          <img
            src={props.promoImage}
            alt="Imagem promocional da série"

          />

        </Link>

        <span class="series-title">{props.title}</span>
      </div>

      <div class="info-series">
        <div class="avaliacao">

          {props.avaliation >= 1 ? <AiFillStar fill='yellow' /> : <AiOutlineStar />}
          {props.avaliation >= 2 ? <AiFillStar fill='yellow' /> : <AiOutlineStar />}
          {props.avaliation >= 3 ? <AiFillStar fill='yellow' /> : <AiOutlineStar />}
          {props.avaliation >= 4 ? <AiFillStar fill='yellow' /> : <AiOutlineStar />}
          {props.avaliation == 5 ? <AiFillStar fill='yellow' /> : <AiOutlineStar />}

         

        </div>
        <span class="year-interval">Início: {props.year}</span>
      </div>

      <div class="eps-temps">
        <span class="eps">{props.episodes} ep(s)</span>
        <span class="temps">{props.seasons} temp(s)</span>
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