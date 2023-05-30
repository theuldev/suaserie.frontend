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

          <Link className="button-wrapper-entrar" to={'/login'}>

            <button id="btn-entrar" className="btnEntrar"  >

              Entre


            </button>
          </Link>



          <span>Ou</span>

          <Link className="button-wrapper-cadastrar" to={'/cadastro'}>

            <button id="btn-cadastrar" className="btnCadastrar">

              Cadastre-se

            </button>
          </Link>



        </div>


      </div>
    </div>



  </div>
);



export default InitialPage;