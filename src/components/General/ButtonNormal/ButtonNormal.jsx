import React from 'react';

import "./ButtonNormal.css"
const ButtonNormal = (props) => {

  let css = `
  .${props.classId} {
      background-color: ${props.bckg};
      color: ${props.color};
  }

  .${props.classId}:hover {
    background-color: ${props.color};
    color: ${props.bckg};
  }
`



  return (
    <button className= {`button-normal ${props.classId}`}  >
      <style>
        {css}

      </style>

      <span className="icon-button">
        {props.icon}
      </span>
      {props.text}
    </button>
  )
}

export default ButtonNormal;