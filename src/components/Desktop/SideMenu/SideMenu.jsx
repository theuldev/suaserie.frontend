import React, { useState } from "react";
import images from "../../../constants/images";
import './SideMenu.css'



const SideMenu = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.
  

  return (
    <div class="side-menu">
    <div class="user-bar">
      <div class="user-wrapper">
        <div class="circle-user">
          <img src={images.user} alt="Perfil do usuário" />
        </div>

        <span class="nickname">Apelido</span>
        <span class="material-icons settings"> settings </span>
      </div>
    </div>

    <div class="side-bar-items">
      <span class="side-bar-items-title">Suas listas</span>
      <hr />
      <div class="side-bar-item">
        <span class="item-text">Favoritas</span>

        <span class="material-symbols-outlined" id="liked">
          sentiment_very_satisfied
        </span>
      </div>
      <div class="side-bar-item">
        <span class="item-text">Já vistas</span>

        <span class="material-symbols-outlined" id="watched"> done_all </span>
      </div>
      <div class="side-bar-item">
        <span class="item-text">Desejo ver</span>
        <span class="material-symbols-outlined" id="wish"> hotel_class </span>
      </div>
      <div class="side-bar-item">
        <span class="item-text">Piores </span>

        <span class="material-symbols-outlined" id="disliked">
          sentiment_very_dissatisfied
        </span>
      </div>
      <img
        src="../public/images/logo-variations/logo-light.png"
        alt="Projeto SóSéries logomarca."
      />
    </div>
  </div>
  )

};



export default SideMenu;