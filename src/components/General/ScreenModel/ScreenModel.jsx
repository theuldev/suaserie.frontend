import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ScreenModel.css";
import MediaQuery from 'react-responsive';

import logos from "../../../constants/logos";

import Burger from "../../Mobile/Burger/Burger";
import SideMenu from "../../Desktop/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import Header from "../../Desktop/Header/Header";
import Navigation from "../../Mobile/Navigation/Navigation";

// ícones:

// Componentes:

// Esssa "página" será movida par aum componente pois só é a base!
const ScreenModel = () => {

  let screenMobile = 650;


  return (
    <div className="body-screenModel">




      {/* DESKTOP */}

      <MediaQuery minWidth={screenMobile + 1}>
        <Header />
        <SideMenu apelido={"Iasmim"} />

      </MediaQuery>

      {/* Lista de séries - Content */}
      <main>
        <div class="visual">
          <img src={logos.logoLight} alt="Projeto SóSéries logomarca." />
        </div>

      </main>

      {/* MOBILE */}
      <Helmet>
        <title>Só Séries - Séries</title>
      </Helmet>
      <Outlet />
      {/*  Fim do content ---------------- */}
      <MediaQuery maxWidth={screenMobile} >
        <Burger />
        <Navigation />

      </MediaQuery>
      {/* Navigation Mobile */}
    </div>
  );
};

export default ScreenModel;
