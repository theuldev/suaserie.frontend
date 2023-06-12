import React from "react";
import { Helmet } from "react-helmet";
import './InitialPage.css'
import logos from '../../constants/logos';

// ícones:
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Link } from "react-router-dom";
import BigButton from "../../components/General/BigButton/BigButton";

const InitialPage = () => (

  <div>
    <Helmet>
      <title>Só Séries - Inicial</title>

    </Helmet>
    <div className="body-initial">
      <div className="ContainerEsquerdo">
        <div className="logo">
          <img src={logos.logoLight} />
        </div>


        <div id="mensagem">
          <span>Crie e gerencie</span>
          <span>as listas das suas séries favoritas</span>
          <span>em um só lugar!</span>
        </div>

        <div className="ilustracao">
          <span className="material-symbols-outlined">
            <MdOutlineMovieFilter />
          </span>
        </div>
      </div>


      <div className="ContainerDireito">

        <div className="wrapper-buttons">

          <BigButton linkTo={"/login"} >

            Entre
            
          </BigButton>



          <span>Ou</span>

          <BigButton linkTo={"/cadastro"} >
            Cadastre-se
          </BigButton>



        </div>


      </div>
    </div>



  </div>
);



export default InitialPage;