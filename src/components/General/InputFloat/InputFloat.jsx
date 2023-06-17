import React, { useState } from "react";
import "./InputFloat.css";

const InputFloat = (props) => {
  // Input animation deles
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.target.name = props.inputName;
    e.value = value;
    props.parentCallback(e);
    console.log(e.target.value)

    setValue(e.target.value);
    if (e.value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <div className="input-form inputBox">
      <input
        className="inputFloat"
        type={props.inputType}
        value={value}
        onChange={(e) => handleChange(e)}
        placeholder={props.placeholder}
        required
        name = {props.name}
      />
      <label className={isActive ? "active" : ""} htmlFor="inputFloat">
        {props.name}
      </label>
    </div>
  );
};

export default InputFloat;
