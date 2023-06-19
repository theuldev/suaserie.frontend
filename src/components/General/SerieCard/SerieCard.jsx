import { useEffect, useState } from "react";
import "./SerieCard.css";
import images from "../../../constants/images";

import { getSeriebyId } from "../../../services/series/seriesService";
import {
  getRating,
  addDislikedSeries,
  addWatchedSeries,
  addWishSeries,
  addFavSeries,
} from "../../../services/user/userService";

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

  const [avaliation, setAvaliation] = useState(0);
  useEffect(() => {
    getSeriebyId(props.serieId).then((result) => {
      setSerie(result);
      console.log(result);
    });

    getRating(props.serieId).then((result) => {
      setAvaliation(result);
    });
  }, []);
  const addDislikedSeriesClick = (id) => {
    addDislikedSeries(id).then((result) => {
      console.log(result);
    });
  };
  const addFavSeriesClick = (id) => {
    addFavSeries(id).then((result) => {
      console.log(result);
    });
  };
  const addWishSeriesClick = (id) => {
    addWishSeries(id).then((result) => {
      console.log(result);
    });
  };
  const addWatchedSeriesClick = (id) => {
    addWatchedSeries(id).then((result) => {
      console.log(result);
    });
  };
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
          {avaliation >= 1 ? <AiFillStar fill="yellow" /> : <AiOutlineStar />}
          {avaliation >= 2 ? <AiFillStar fill="yellow" /> : <AiOutlineStar />}
          {avaliation >= 3 ? <AiFillStar fill="yellow" /> : <AiOutlineStar />}
          {avaliation >= 4 ? <AiFillStar fill="yellow" /> : <AiOutlineStar />}
          {avaliation == 5 ? <AiFillStar fill="yellow" /> : <AiOutlineStar />}
        </div>
        <span class="year-interval">Início: {serie.releaseYear}</span>
      </div>

      <div class="eps-temps">
        <span class="eps">{serie.episodes} ep(s)</span>
        <span class="temps">{serie.seasons} temp(s)</span>
      </div>

      <div class="series-icons">
        <span class="material-icons-outlined" id="liked">
          <MdOutlineSentimentVerySatisfied
            onClick={() => addFavSeriesClick(serie.id)}
          />
        </span>
        <span class="material-icons-outlined" id="disliked">
          <MdOutlineSentimentVeryDissatisfied
            onClick={() => addDislikedSeriesClick(serie.id)}
          />
        </span>
        <span class="material-icons-outlined" id="watched">
          <MdDoneAll onClick={() => addWatchedSeriesClick(serie.id)} />
        </span>
        <span class="material-icons-outlined" id="wish">
          <MdOutlineHotelClass onClick={() => addWishSeriesClick(serie.id)} />
        </span>
      </div>
    </div>
  );
};

export default SerieCard;
