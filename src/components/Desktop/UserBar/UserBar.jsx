import React from "react";
import './UserBar.css'
// ícones:
import { FiLogOut } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";

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
  const goLogOut = () => {
    navigate('/');

  };
  return (


    <div className="user-bar">
      <div className="user-wrapper">
        <div className="circle-user">
          <img src={props.image} alt="Perfil do usuário" onClick={goProfile} />
        </div>

        <span className="nickname">{props.apelido}</span>



      </div>
      <div className="dropbox">
        <li onClick={goProfile} ><AiOutlineUser />Perfil</li>
        <li onClick={goLogOut}><FiLogOut />Sair </li>

      </div>
    </div>






  )

};



export default UserBar;