import React from 'react'
import "./SerieCard.css";
import images from '../../../constants/images';


const SerieCard = (props) => {
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
          star
        </span>
        <span class="material-icons-outlined" id="star-checked">
          star
        </span>
        <span class="material-icons-outlined" id="star-checked">
          star
        </span>
        <span class="material-icons-outlined" id=""> star </span>
        <span class="material-icons-outlined" id=""> star </span>
      </div>
      <span class="year-interval">Desde 2019</span>
    </div>

    <div class="eps-temps">
      <span class="eps">10 ep(s)</span>
      <span class="temps">2 temp(s)</span>
    </div>

    <div class="series-icons">
      <span class="material-icons-outlined" id="liked">
        sentiment_very_satisfied
      </span>
      <span class="material-icons-outlined" id="disliked">
        sentiment_very_dissatisfied
      </span>
      <span class="material-icons-outlined" id="watched">
        done_all
      </span>
      <span class="material-icons-outlined" id="wish">
        hotel_class
      </span>
    </div>
  </div>
  )
}

export default SerieCard;