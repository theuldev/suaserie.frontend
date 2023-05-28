import React from "react";
import { Helmet } from "react-helmet";
import './InitialPage.css'
import logos from '../../constants/logos';

// ícones:
import { MdOutlineMovieFilter } from 'react-icons/md';
import { Link } from "react-router-dom";

const InitialPage = () => (

  <div>
    <Helmet>
      <title>Só Séries - Inicial</title>

    </Helmet>
    <div className="body-initial">
      <div className="ContainerEsquerdo">
        <div className="logo">
          <img src={logos.logoLightTwo} />
        </div>
        <hr className="divisao" />

        <div className="mensagem">
          <h2>Crie e gerencie as</h2>
          <h2> listas das suas séries favoritas</h2>
          <h2>em um só lugar !</h2>
        </div>
        <hr className="divisao" />
        <div className="ilustracao">
          <span className="material-symbols-outlined">
            <MdOutlineMovieFilter />
          </span>
        </div>
      </div>


      <div className="ContainerDireito">

        <div className="wrapper-buttons">

          <Link className="button-wrapper" to={'/login'}>

            <button id="btn-entrar" className="btnEntrar"  >

              Entre


            </button>
          </Link>



          <span>Ou</span>


          <button id="btn-cadastrar" className="btnCadastrar">Cadastre-se</button>



        </div>


      </div>
    </div>



  </div>
);



export default InitialPage;