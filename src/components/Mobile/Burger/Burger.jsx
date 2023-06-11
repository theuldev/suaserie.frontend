import React, { useState } from "react";
import "./Burger.css";
import logos from "../../../constants/logos";
import UserBar from "../../Desktop/UserBar/UserBar";

const Burger = (props) => {
  //  Criando componetes mobile.

  return (
    <header className="">
      <div class="header-mobile">
        <div className="logo-wrapper">
          <img
            src={logos.logoLight}
            className="logo"
            alt="Projeto Só Séries Logomarca"
          />
        </div>
        <UserBar></UserBar>
        <button class="hamburger ">
          <div class="bar"></div>
        </button>
      </div>
    </header>
  );
};

export default Burger;
