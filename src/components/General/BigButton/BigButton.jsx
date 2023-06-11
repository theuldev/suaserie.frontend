
import React from "react";
import "./BigButton.css";
import { Link } from "react-router-dom";

const BigButton = (props) => {
  

  return (
    
    
    <Link className="button-wrapper"  to={props.linkTo}>
    <button   >

        {props.children}

      </button>

    </Link>

  );
};

export default BigButton;
