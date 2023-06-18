import { React, useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import "./SerieSelected.css";

// ícones:
import {
  MdOutlineSentimentVerySatisfied,
  MdPlaylistAdd,
  MdOutlineSentimentVeryDissatisfied,
} from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import ButtonNormal from "../../components/General/ButtonNormal/ButtonNormal";
import {getSeriebyId} from "../../services/series/seriesService";


const SerieSelected = (props) => {
 const [serie, setSerie] = useState([]);
useEffect(() => {
    getSeriebyId(id).then((result)=> {
      setSerie(result)
  
    })
  }, []);



  // Pegando o id da séries para fazer a conexão com o banco.
const {id} = useParams();
  return (
    <div className="body-serie-selected">

      <main>
        <section className="main-content-selected">


          <div className="serie-selected">
            <div className="img-streaming">
              <img
                className="promo"
                src={serie.img}
                alt="Imagem promocional da série"
              />
              <div className="rating">
                <span className="material-icons" id="star-checked">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="material-icons" id="star-checked">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="material-icons" id="star-checked">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="material-icons" id="star-checked">
                  {" "}
                  <AiFillStar />{" "}
                </span>
                <span className="material-icons">
                  <AiOutlineStar />{" "}
                </span>
              </div>
              <div className="streaming-icon">
                <span>Disponível em</span>

                {}
                <div className="streaming-plataforms">

                  <img
                    src= {serie.serie_streaming}
                    alt={serie.streamingId}
                  />

                </div>
              </div>

              <div className="like-dislike">
                <span className="material-symbols-outlined" id="liked">
                  <MdOutlineSentimentVerySatisfied />
                </span>
                <span className="material-symbols-outlined" id="disliked">
                  <MdOutlineSentimentVeryDissatisfied />
                </span>
              </div>
            </div>

            <div className="info">
              <h1>{serie.name}</h1>
              <div className="text">
                <div className="description">
                  <p>
                    {
                      serie.summary
                    }
                  </p>
                </div>

                <div className="date">
                  <h2>Informações</h2>
                  <p>
                    Elenco: {serie.cast}
                  </p>
                  <p>
                       Avaliações: {serie.rottenTomatoes}
                  </p>
                </div>
              </div>

              <ul className="icons">
                <li id="eps-temps">{serie.episodes} eps</li>
                <li id="eps-temps">{serie.seasons} temps </li>
                <li id="add">
                  <span className="material-icons" id="add-serie">
                    <MdPlaylistAdd />
                  </span>
                </li>
                <a
                  href="https://www.disneyplus.com/pt-br/series/the-falcon-and-the-winter-soldier/4gglDBMx8icA"
                  target="_blank"
                >
                  <li id="see">
                    <span className="material-icons">
                      {" "}
                      Assistir{" "}
                    </span>
                  </li>
                </a>
              </ul>
            </div>

            <ButtonNormal
              bckg={"#ffd86d"}
              color={"#242629"}
              text={"Voltar"}
              classId={"voltar"}
              icon={<IoArrowBackOutline />}
              link={"series"}
            />
          </div>
        </section>
      </main>




    </div>
  )
};
export default SerieSelected;
