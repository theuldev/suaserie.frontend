import React, { useState } from "react";
import "./Burger.css";
import logos from "../../../constants/logos";
import UserBar from "../../Desktop/UserBar/UserBar";

const Burger = (props) => {
  //  Criando componetes mobile.

  return (
    <header className="hdr-mobile-wrapper">
     
     <div class="header-mobile">
      <div class="user-bar">
        <div class="user-wrapper">

          <div class="circle-user">

            <img src="../../public/images/user.png" alt="Foto do usuário"/>

          </div>

          <span class="nickname">Apelido</span>

        </div>
        <UserBar></UserBar>
        <button class="hamburger ">
          <div class="bar"></div>
        </button>
        </div>
      </div>
    </header>
  );
};

export default Burger;
