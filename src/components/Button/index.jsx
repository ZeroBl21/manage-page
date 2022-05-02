import React from "react";

import "./Button.css";

const Button = ({ text, handleClick, hide, inverted }) => {
  return (
    <button
      className={`
        custom__button 
        ${hide ? "hide" : ""}
        ${inverted ? "alt" : ""}
      `}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
