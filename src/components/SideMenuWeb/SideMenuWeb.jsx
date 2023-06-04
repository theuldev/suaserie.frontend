import React, { useState } from "react";

import './SideMenuWeb.css'



const SideMenuWeb = (props) => {

  // Input animation
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState('');

  function handleTextChange(text) {
    setValue(text);

    if (text !== '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="">
      <h1>Menu Web!!</h1>
    </div>
  )

};



export default SideMenuWeb;