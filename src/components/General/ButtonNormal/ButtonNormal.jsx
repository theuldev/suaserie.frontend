import React from "react";
import { useNavigate } from "react-router-dom";
import "./ButtonNormal.css";

const ButtonNormal = (props) => {
  const navigate = useNavigate();
  const goTo = () => {

      window.history.back();

  };

  let css = `
  .${props.classId} {
      background-color: ${props.bckg};
      color: ${props.color};
  }

  .${props.classId}:hover {
    background-color: ${props.color};
    color: ${props.bckg};
  }
`;

  return (
    <button
      className={`button-normal ${props.classId}`}
      onClick={props.classId === 'voltar' ? goTo :  props.onClick}
    >
      <style>{css}</style>

      <span className="icon-button">{props.icon}</span>
      <span className="text">{props.text}</span>
    </button>
  );
};

export default ButtonNormal;
