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

// -----------




// ------



// Usará o id da série.


  return (
    <div className={`card-slide va-card `}   >
      <div class="img-title">
      <Link to={"/series/" + props.serieLista+ props.serieId} className='serie-link'>
        <img
          src={images.anne}
          alt="Imagem promocional da série"
        
        />

      </Link>

        <span class="series-title">Lupin</span>
      </div>

      <div class="info-series">
        <div class="avaliacao">
         
          <AiFillStar fill='yellow' />

        

         
          <AiFillStar fill='yellow' />

         

         
            <AiFillStar fill='yellow' />

         

              <AiOutlineStar  />
          
                  <AiOutlineStar  />
        
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