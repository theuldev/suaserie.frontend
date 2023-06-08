import React from "react";

import "./LinkPage.css";
import { Link } from "react-router-dom";

const LinkPage = (props) => {

  // Componente de link das páginas de cadastro e login.

  return (
    <div className="conexao">
      <span>
        {props.text}
        {" "}
      </span>
      <Link to={props.linkTo} className="conexao-link">
        {props.linkText}
      </Link>
    </div>
  );
};

export default LinkPage;
