import React, { useState } from "react";
import "./HeaderItem.css";


// ícones
import { BsFillPersonFill } from "react-icons/bs";
import { RiMovieLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";


const HeaderItem = (props) => {


  return (
    <div>
      <Link to={props.linkTo} className="link">
        <span class="material-icons">  {props.children[0]}    </span>
        <span className="header-item">
          {props.children[1]}

        </span>

      </Link>

    </div>
  );
};

export default HeaderItem;
