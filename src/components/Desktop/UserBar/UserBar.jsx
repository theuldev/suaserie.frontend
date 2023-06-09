import React from "react";
import './UserBar.css'
// ícones:
import { FiSettings } from "react-icons/fi";
// Funções:
import { useNavigate } from 'react-router-dom';




const UserBar = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.

  // Navegação da página:
  const navigate = useNavigate();
  const goProfile = () => {
    navigate('/profile');
  }
  return (


    <div className="user-bar">
      <div className="user-wrapper">
        <div className="circle-user">
          <img src={props.image} alt="Perfil do usuário" onClick={goProfile} />
        </div>

        <span className="nickname">{props.apelido}</span>
        <span onClick={goProfile} className="material-icons settings"> <FiSettings /> </span>
      </div>
    </div>






  )

};



export default UserBar;