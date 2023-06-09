import React, { useState } from "react";
import images from "../../../constants/images";
import './UserBar.css'
import logos from "../../../constants/logos";
import BigButton from "../../General/BigButton/BigButton";
// ícones:
import { FiSettings } from "react-icons/fi";


const UserBar = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.


  return (

    <div className="user-bar">
      <div className="user-wrapper">
        <div className="circle-user">
          <img src={props.image} alt="Perfil do usuário" />
        </div>

        <span className="nickname">{props.apelido}</span>
        <span onClick={props.functionClick} className="material-icons settings"> <FiSettings /> </span>
      </div>
    </div>






  )

};



export default UserBar;