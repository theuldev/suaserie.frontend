import React, { useState } from "react";
import "./Burger.css";
import logos from "../../../constants/logos";
import UserBar from "../../Desktop/UserBar/UserBar";
import images from "../../../constants/images";

const Burger = (props) => {
  //  Criando componetes mobile.

  return (
    <header className="hdr-mobile-wrapper">
      <div class="header-mobile">
        <div id="user-bar-mobile">
          <div class="user-wrapper">
            <div class="circle-user">
              <img src={props.userPic} alt="Foto de perfil do usuário" />
            </div>

            <span class="nickname">Apelido</span>
          </div>
        </div>
        <button class="hamburger">
          <div class="bar"></div>
        </button>
      </div>
    </header>
  );
};

export default Burger;
