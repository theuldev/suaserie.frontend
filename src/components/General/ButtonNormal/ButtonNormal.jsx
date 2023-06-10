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
    <button className={`button-normal ${props.classId}`} onClick={props.function} >
      <style>
        {css}

      </style>

      <span className="icon-button">
        {props.icon}
      </span>
      <span className='text'>
      {props.text}

      </span>
    </button>
  )
}

export default ButtonNormal;