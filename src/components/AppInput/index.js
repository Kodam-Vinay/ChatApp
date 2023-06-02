import React from "react";
import "../../css/Appinput.css";
const AppInput = (props) => {
  const { placeholder, onChange } = props;
  return (
    <input
      className="App-Input"
      placeholder={placeholder ? placeholder : ""}
      onChange={onChange}
    />
  );
};

export default AppInput;
