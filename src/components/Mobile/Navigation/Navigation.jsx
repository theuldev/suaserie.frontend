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

  const navigate = useNavigate();
  function goToPage(page) {
    navigate(`${page} `);
  }

  return (
    <div id="navigation-mobile">
      <ul id='nav-list'>
        <Link className="side-bar-item">
          <li  id={props.isChecked == "liked" ? "checkedNav" : " "}>
            <span className="item-text">Favoritas</span>

            <span className="material-symbols-outlined" id="liked">
              <MdOutlineSentimentVerySatisfied />
            </span>
          </li>

        </Link>
        <Link className="side-bar-item">
          <li  id={props.isChecked == "watched" ? "checkedNav" : " "}>
            <span className="item-text">Já vistas</span>

            <span className="material-symbols-outlined" id="watched"> <MdDoneAll /> </span>
          </li>

        </Link>
        <Link className="side-bar-item">
          <li  id={props.isChecked == "wish" ? "checkedNav" : " "}>
            <span className="item-text">Desejo ver</span>
            <span className="material-symbols-outlined" id="wish"><MdOutlineHotelClass /> </span>
          </li>

        </Link>
        <Link className="side-bar-item">
          <li  id={props.isChecked == "disliked" ? "checkedNav" : " "}>
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