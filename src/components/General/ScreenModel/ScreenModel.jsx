import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "./ScreenModel.css";
import MediaQuery from 'react-responsive';

import logos from "../../../constants/logos";

import Burger from "../../Mobile/Burger/Burger";
import SideMenu from "../../Desktop/SideMenu/SideMenu";

import Header from "../../Desktop/Header/Header";
import Navigation from "../../Mobile/Navigation/Navigation";
import { SlArrowRight } from "react-icons/sl";

import { getInfo } from "../../../services/user/userService";

// ícones:

// Componentes:

// Esssa "página" será movida par aum componente pois só é a base!
const ScreenModel = (props) => {
const [userInfo, SetInfo] = useState({nickname:'',photo:'',lastname:'',email:'',name:''});
  let screenMobile = 650;
    useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await getInfo();
        if (user) {
          SetInfo(user);
          console.log(user)
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className="body-screenModel">
      <main>
        <div class="visual">
          <img src={logos.logoLight} alt="Projeto SóSéries logomarca." />
        </div>


        <section className="main-content">
          <div id="title-wrapper">

            <SlArrowRight className="icon-title" />

            <h1 id="main-title-page">{props.titlePage}</h1>
          </div>

          {/* Conteúdo específico de cada página - Content */}
          {props.children}
        </section>

      </main>

      <Helmet>
        <title>{`Só Séries - ${props.titlePage}`}</title>
      </Helmet>

      {/* Componentes colcoados por ultimo para que sobreponham os anteriores. */}
      {/* DESKTOP */}
      <MediaQuery minWidth={screenMobile + 1}>
        <Header apelido={userInfo.nickname} userPic={userInfo.photo} />
        <SideMenu checkedItem={props.checkedItem} />
      </MediaQuery>

      {/* MOBILE */}
      <MediaQuery maxWidth={screenMobile} >
        <Burger apelido={props.apelido} userPic={props.userPic} />
        <Navigation checkedItem={props.checkedItem} />
      </MediaQuery>

    </div>
  );
};

export default ScreenModel;
