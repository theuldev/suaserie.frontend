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


        <div className="mensagem">
          <h2>Crie e gerencie</h2>
          <h2>as listas das suas séries favoritas</h2>
          <h2>em um só lugar!</h2>
        </div>

        <div className="ilustracao">
          <span className="material-symbols-outlined">
            <MdOutlineMovieFilter />
          </span>
        </div>
      </div>


      <div className="ContainerDireito">

        <div className="wrapper-buttons">

          <BigButton buttonText={"Entre"} linkTo={"/login"} />



          <span>Ou</span>

          <BigButton buttonText={"Cadastre-se"} linkTo={"/cadastro"} />



        </div>


      </div>
    </div>



  </div>
);



export default InitialPage;