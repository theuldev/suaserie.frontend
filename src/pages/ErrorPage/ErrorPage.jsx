import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ErrorPage.css";
import logos from "../../constants/logos";

// ícones:
import { TbError404 } from "react-icons/tb";
import { BiArrowBack, BiSad } from "react-icons/bi"
import { goBack } from "../../constants/functions";




const ErrorPage = () => {



  return (
    <div className="body-error">
      <Helmet>
        <title>Erro 🙁</title>
      </Helmet>

      <div className="error-box">
        <div className="warning-msg">
      <img src={logos.logoLight}  alt="Logomarca Só Séries"/>
          <div className="icon">

            <TbError404 size={170} />
          </div>

          <span>  Página não encontrada!   </span>
        </div>
        <p>
          <BiSad size={40} />
          Parece que essa página não existe! Para voltar a visualizar suas listas e ver séries clique no botão abaixo.
        </p>
        <button onClick={goBack}><BiArrowBack /> Voltar </button>
      </div>
    </div>
  );
};

export default ErrorPage;
