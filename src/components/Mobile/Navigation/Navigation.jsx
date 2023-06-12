import React from 'react'
import "./Navigation.css";

// ícones:
import {
  MdOutlineSentimentVerySatisfied,
  MdDoneAll,
  MdOutlineHotelClass,
  MdOutlineSentimentVeryDissatisfied,
} from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';

// O navigation é colocado abaixo do main!
const Navigation = (props) => {

 

  return (
    <div id="navigation-mobile">
      <ul id='nav-list'>
        <Link to={"/favoritas"} className="side-bar-item">
          <li id={props.checkedItem == "liked" ? "checkedNav" : " "}>
            <span className="item-text">Favoritas</span>

            <span className="material-symbols-outlined" id="liked">
              <MdOutlineSentimentVerySatisfied />
            </span>
          </li>

        </Link>
        <Link to={"/assistidas"} className="side-bar-item">
          <li id={props.checkedItem == "watched" ? "checkedNav" : " "}>
            <span className="item-text">Já vistas</span>

            <span className="material-symbols-outlined" id="watched"> <MdDoneAll /> </span>
          </li>

        </Link>
        <Link to={"/desejoVer"} className="side-bar-item">
          <li id={props.checkedItem == "wish" ? "checkedNav" : " "}>
            <span className="item-text">Desejo ver</span>
            <span className="material-symbols-outlined" id="wish"><MdOutlineHotelClass /> </span>
          </li>

        </Link>
        <Link to={"/piores"} className="side-bar-item">
          <li id={props.checkedItem == "disliked" ? "checkedNav" : " "}>
            <span className="item-text">Piores </span>

            <span className="material-symbols-outlined" id="disliked">
              <MdOutlineSentimentVeryDissatisfied />
            </span>
          </li>

        </Link>
      </ul>
    </div>
  )
}

export default Navigation;