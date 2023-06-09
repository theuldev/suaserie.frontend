import React, { useState } from "react";
import images from "../../../constants/images";
import './SideMenu.css'
import logos from "../../../constants/logos";
import BigButton from "../../General/BigButton/BigButton";
import UserBar from "../UserBar/UserBar";



const SideMenu = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.


  return (
    <div className="side-menu">

{/* Sem a função especificada ainda. */}
      <UserBar apelido="Iasmim" image={images.user} />



      <div className="side-bar-items">




        <span className="side-bar-items-title">Suas listas</span>
        <hr />
        
        <div className="side-bar-item">
          <span className="item-text">Favoritas</span>

          <span className="material-symbols-outlined" id="liked">
            sentiment_very_satisfied
          </span>
        </div>
        <div className="side-bar-item">
          <span className="item-text">Já vistas</span>

          <span className="material-symbols-outlined" id="watched"> done_all </span>
        </div>
        <div className="side-bar-item">
          <span className="item-text">Desejo ver</span>
          <span className="material-symbols-outlined" id="wish"> hotel_class </span>
        </div>
        <div className="side-bar-item">
          <span className="item-text">Piores </span>

          <span className="material-symbols-outlined" id="disliked">
            sentiment_very_dissatisfied
          </span>
        </div>
        <img
          src={logos.logoLight}
          alt="Projeto SóSéries logomarca."
        />
      </div>
    </div>
  )

};



export default SideMenu;