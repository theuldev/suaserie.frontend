import React from "react";

import './SideMenuItem.css'
import { Link } from "react-router-dom";




const SideMenuItem = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.
  // As propriedades irão ditas esses valores.

  return (
    <Link to={props.linkTo} className="side-bar-item" id={props.isChecked == true ? "checkedSide" : " "}>
    
      <span className="item-text">{props.children[0]}</span>

      <span className="icon" id={props.type}>
        {props.children[1]}
      </span>
         <span className="item-text">{props.children[0]}</span>
    </Link>
  )

};



export default SideMenuItem;