import React from "react";

import './SideMenuItem.css'




const SideMenuItem = (props) => {

  // Dizer qual item checked do menu é.
  // O side bar item muda com um ID.


  return (
    <div className="side-bar-item">
    <span className="item-text">Favoritas</span>

    <span className="material-symbols-outlined" id="liked">
      sentiment_very_satisfied
    </span>
  </div>
  )

};



export default SideMenuItem;