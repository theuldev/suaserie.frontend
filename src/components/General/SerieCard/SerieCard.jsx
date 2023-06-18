import { useEffect,useState} from "react";
import "./SerieCard.css";
import images from "../../../constants/images";

import { getSeriebyId } from "../../../services/series/seriesService";


// ícones:
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  MdOutlineSentimentVerySatisfied,
  MdDoneAll,
  MdOutlineHotelClass,
  MdOutlineSentimentVeryDissatisfied,
} from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

const SerieCard = (props) => {
  const [serie, setSerie] = useState([]);
  useEffect(() => {
    getSeriebyId(props.serieId).then((result) => {
      setSerie(result);
      console.log(result)
     
    });
  }, []);
  // Possuirá uma propriedade que leva à páginade visualização de série com seu id especifico
  // Usará o id da série.

  return (
    <div className={`card-slide va-card `}>
      <div class="img-title">
        <Link to={`${props.serieId}`} className="serie-link">
          <img src={serie.img} alt="Imagem promocional da série" />
        </Link>

        <span class="series-title">{serie.name}</span>
      </div>

      <div class="info-series">
        <div class="avaliacao">
          {serie.avaliation >= 1 ? (
            <AiFillStar fill="yellow" />
          ) : (
            <AiOutlineStar />
          )}
          {serie.avaliation >= 2 ? (
            <AiFillStar fill="yellow" />
          ) : (
            <AiOutlineStar />
          )}
          {serie.avaliation >= 3 ? (
            <AiFillStar fill="yellow" />
          ) : (
            <AiOutlineStar />
          )}
          {serie.avaliation >= 4 ? (
            <AiFillStar fill="yellow" />
          ) : (
            <AiOutlineStar />
          )}
          {serie.avaliation == 5 ? (
            <AiFillStar fill="yellow" />
          ) : (
            <AiOutlineStar />
          )}
        </div>
        <span class="year-interval">Início: {serie.releaseYear}</span>
      </div>

      <div class="eps-temps">
        <span class="eps">{serie.episodes} ep(s)</span>
        <span class="temps">{serie.seasons} temp(s)</span>
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
  );
};

export default SerieCard;
