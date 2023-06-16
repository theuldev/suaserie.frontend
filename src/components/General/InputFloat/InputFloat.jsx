import React, { useState } from "react";
import "./InputFloat.css";

const InputFloat = (props) => {
  // Input animation deles
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    e.name = props.inputName;
    e.value = value;
    props.parentCallback(e);

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
      />
      <label className={isActive ? "active" : ""} htmlFor="inputFloat">
        {props.inputName}
      </label>
    </div>
  );
};

export default InputFloat;
