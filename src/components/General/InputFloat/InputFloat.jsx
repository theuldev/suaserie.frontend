import React, { useState } from "react";
import "./InputFloat.css";

const InputFloat = (props) => {
  // Input animation deles
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");


 const handleFocus = (e) =>{
    e.name = props.inputName
    e.value = value
    
  props.parentCallback(e)
}

  function handleTextChange(text) {
    setValue(text);
    if (text !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  return (
    <div className="input-form inputBox">
      <input
        className="inputFloat"
        type={props.inputType}
        value={value}
        onChange={(e) => handleTextChange(e.target.value)}
        placeholder={props.placeholder}
        required
        onFocus={handleFocus}

      />
      <label className={isActive ? "active" : ""} htmlFor="inputFloat">
        {props.inputName}
      </label>
    </div>
  );
};

export default InputFloat;
