import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Series.css";
import MediaQuery from 'react-responsive'

import logos from "../../constants/logos";

import Burger from "../../components/Mobile/Burger/Burger";
import SideMenu from "../../components/Desktop/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";

// ícones:

// Componentes:


const Series = () => {

  let screenSize = 650;


  return (
    <div className="body-series">


      {/* Header Web + burger Menu  Mobile*/}


      {/* Side Menu Desktop */}
      <MediaQuery minWidth={screenSize + 1}>
        <SideMenu />
      </MediaQuery>
      {/* Lista de séries - Content */}

      <Helmet>
        <title>Só Séries - Séries</title>
      </Helmet>
      <Outlet />
      {/*  Fim do content ---------------- */}
      <MediaQuery maxWidth={screenSize} >
        <Burger />


      </MediaQuery>
      {/* Navigation Mobile */}
    </div>
  );
};

export default Series;
