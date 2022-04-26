import React from "react";

import './Button.css';

const Button = ({ text, handleClick, hide }) => {

  return (
    <button className={`custom__button ${ hide ? "hide" : "" }`} onClick={handleClick}>{text}</button>
  )
}

export default Button;
