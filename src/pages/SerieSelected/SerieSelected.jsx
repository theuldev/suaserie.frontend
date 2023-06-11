import { React } from "react";
import MediaQuery from "react-responsive";
import "./SerieSelected.css";
import Header from "../../components/Desktop/Header/Header";
import SideMenu from "../../components/Desktop/SideMenu/SideMenu";
import {
  MdSentimentVerySatisfied,
  MdSentimentVeryDissatisfied,
  MdPlaylistAdd,
  MdDoneAll,
} from "react-icons/md";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import ButtonNormal from "../../components/General/ButtonNormal/ButtonNormal";
import { SlArrowRight } from "react-icons/sl";

let screenMobile = 650;
const SerieSelected = () => (
  <div className="body-serie-selected">
    <MediaQuery minWidth={screenMobile + 1}>
      <Header />
      <SideMenu />
    </MediaQuery>
    <main>
      <section className="main-content">
        <div className="title-wrapper"> 
          <span className="material-symbols-outlined">
            {" "}
            <SlArrowRight />{" "}
          </span>
          <h1>Séries</h1>
        </div>

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
                  src="https://cdn.icon-icons.com/icons2/2657/PNG/256/disney_plus_icon_161064.png"
                  alt="Disney Plus"
                />
                  <img
                  src="https://cdn.icon-icons.com/icons2/183/PNG/256/HBO_22554.png"
                  alt="HBO Max"
                />
                    <img
                  src="https://cdn.icon-icons.com/icons2/2657/PNG/256/netflix_icon_161073.png"
                  alt="NetFlix"
                />
              </div>
            </div>

            <div className="like-dislike">
              <span className="material-symbols-outlined" id="liked">
                <MdSentimentVerySatisfied />
              </span>
              <span className="material-symbols-outlined" id="disliked">
                <MdSentimentVeryDissatisfied />
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
                    <MdDoneAll />{" "}
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
          />
        </div>
      </section>
    </main>
  </div>
);
export default SerieSelected;
