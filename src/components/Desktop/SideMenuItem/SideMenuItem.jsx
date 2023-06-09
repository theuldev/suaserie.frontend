import React from "react";

import './SideMenuItem.css'




const SideMenuItem = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.


  return (
    <div className="side-bar-item" id={props.isChecked == true ? "checkedSide" : " "}>
    <span className="item-text">{props.children}</span>

    <span className="icon" id={props.type}>
     {props.icon}
    </span>
  </div>
  )

};



export default SideMenuItem;