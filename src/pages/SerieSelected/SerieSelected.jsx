import { React } from "react";
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



const SerieSelected = (props) => {


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
                src="https://macmagazine.com.br/wp-content/uploads/2014/05/15-cartaz-sherlock-holmes.jpg"
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
                <div className="streaming-plataforms">

                  <img
                    src="https://cdn.icon-icons.com/icons2/183/PNG/256/HBO_22554.png"
                    alt="HBO Max"
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
              <h1>Sherlock</h1>
              <div className="text">
                <div className="description">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur magnam soluta, esse earum dicta amet
                    exercitationem recusandae totam, eius modi error nam veritatis
                    ullam fugiat odio vero deleniti labore eveniet. Lorem ipsum
                    dolor sit amet consectetur, adipisicing elit. Iusto, illum
                    pariatur? Eligendi praesentium, ad numquam repellat autem
                    voluptas illo veritatis est similique perferendis, magni error
                    id ab eius placeat dolorum. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ratione nobis esse autem veniam,
                    earum rem, reiciendis dolores aliquam ex aspernatur dicta odio
                    labore consequuntur iusto magnam sed necessitatibus iure
                    recusandae? Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Atque vel dolor, est quasi similique dicta
                    ex illo earum odio laboriosam voluptate magni dolorum et
                    saepe. Nulla earum illo autem neque?
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid nulla harum voluptatem tempora facere velit, ipsum
                    corrupti omnis eius veniam labore inventore. Sunt repellendus
                    incidunt debitis exercitationem? Nihil, voluptate molestiae.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Possimus corporis quam perferendis? Quaerat ullam tenetur
                    mollitia. Exercitationem, numquam quis dignissimos assumenda
                    necessitatibus fuga ipsam! Explicabo mollitia eveniet itaque
                    illum pariatur! Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Accusantium saepe ducimus architecto dolore
                    vero deleniti ab incidunt aliquam dolores. Nemo, accusantium
                    ipsa neque harum in eaque eos asperiores incidunt ab.
                  </p>
                </div>

                <div className="date">
                  <h2>Datas</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                    nam quo eveniet ipsum. Tenetur quasi assumenda facere ea
                    ratione quibusdam reiciendis ad rem qui odit quam, repellat,
                    molestiae, excepturi tempora.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
                    nam quo eveniet ipsum. Tenetur quasi assumenda facere ea
                    ratione quibusdam reiciendis ad rem qui odit quam, repellat,
                    molestiae, excepturi tempora.
                  </p>
                </div>
              </div>

              <ul className="icons">
                <li id="eps-temps">12 eps</li>
                <li id="eps-temps">4 temps</li>
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
