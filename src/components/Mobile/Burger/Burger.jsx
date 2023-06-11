import React, { useRef, useState } from "react";
import "./Burger.css";
import logos from "../../../constants/logos";
import UserBar from "../../Desktop/UserBar/UserBar";
import images from "../../../constants/images";
import { Link, useNavigate } from "react-router-dom";


// ícones:
import { AiOutlineUser } from "react-icons/ai";
import { RiMovieLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import {BsFillPersonVcardFill} from "react-icons/bs";

const Burger = (props) => {
  //  Criando componetes mobile.
  const btn = useRef();
  const menu = useRef();

  function dynamicBurger(e) {
    btn.current.classList.toggle('is-active');
    menu.current.classList.toggle('is-active');
  }

  // Navegação entre a spáginas.
  const navigate = useNavigate();
  const goToProfile = () => {
    navigate(`/profile`);
  };

  return (
    <div>
      <header className="hdr-mobile-wrapper">
        <div class="header-mobile">
          <div id="user-bar-mobile">
            <div class="user-wrapper">
              <div class="circle-user" onClick={goToProfile}>
                <img src={props.userPic} alt="Foto de perfil do usuário"  />
              </div>

              <span class="nickname">Apelido</span>
            </div>
          </div>
          <button ref={btn} onClick={dynamicBurger} class="hamburger">
            <div class="bar"></div>
          </button>
        </div>
      </header>
      <div ref={menu} class="mobile-side">
        <nav>
          <Link to={"/series"} className="link">
            <span class="material-icons"> <AiOutlineUser/> </span> Minhas listas
          </Link>
          <Link to={"/series"}  className="link">
            <span class="material-icons"> <RiMovieLine/> </span>Mais séries
          </Link>
          <Link to={"profile"}  className="link">
            <span class="material-icons"> <BsFillPersonVcardFill/> </span>Visualizar perfil
          </Link>
          <Link to={"/"} className="link"> <span class="material-icons"> <FiLogOut/> </span>Sair </Link>
        </nav>
       <div className="image-wrapper">
        <img
          src={logos.logoDark}
          alt="Logomarca Projeto SóSéries"
        />
      </div>
       </div>
    </div>
  );
};

export default Burger;
