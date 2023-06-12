import React from 'react'


// ícones:
import {
  MdOutlineSentimentVerySatisfied,
  MdDoneAll,
  MdOutlineHotelClass,
  MdOutlineSentimentVeryDissatisfied,
} from "react-icons/md";

// O navigation é colocado abaixo do main!
const Navigation = () => {

  return (
    <div id="navigation-mobile">
      <ul>
        <li className="side-bar-item" id="checked">
          <span className="item-text">Favoritas</span>

          <span className="material-symbols-outlined" id="liked">
            <MdOutlineSentimentVerySatisfied />
          </span>
        </li>
        <li className="side-bar-item">
          <span className="item-text">Já vistas</span>

          <span className="material-symbols-outlined" id="watched"> <MdDoneAll /> </span>
        </li>
        <li className="side-bar-item">
          <span className="item-text">Desejo ver</span>
          <span className="material-symbols-outlined" id="wish"><MdOutlineHotelClass /> </span>
        </li>
        <li className="side-bar-item">
          <span className="item-text">Piores </span>

          <span className="material-symbols-outlined" id="disliked">
            <MdOutlineSentimentVeryDissatisfied />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;