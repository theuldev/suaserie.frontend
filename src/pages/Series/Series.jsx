import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Series.css";
import MediaQuery from 'react-responsive'

import logos from "../../constants/logos";

import Burger from "../../components/Mobile/Burger/Burger";
import SideMenu from "../../components/Desktop/SideMenu/SideMenu";
import { Outlet } from "react-router-dom";
import Header from "../../components/Desktop/Header/Header";

// ícones:

// Componentes:


const Series = () => {

  let screenMobile = 650;


  return (
    <div className="body-series">


      {/* Header Web + burger Menu  Mobile*/}

      {/* DESKTOP */}
      {/* Side Menu Desktop */}
      <MediaQuery minWidth={screenMobile + 1}>
      <Header/>
      <SideMenu/>
        {/* <SideMenu /> */}
      </MediaQuery>
      {/* Lista de séries - Content */}

{/* MOBILE */}

      <Helmet>
        <title>Só Séries - Séries</title>
      </Helmet>
      <Outlet />
      {/*  Fim do content ---------------- */}
      <MediaQuery maxWidth={screenMobile} >
        <Burger />


      </MediaQuery>
      {/* Navigation Mobile */}
    </div>
  );
};

export default Series;
