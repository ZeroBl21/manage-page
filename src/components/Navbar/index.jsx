import React from "react";
import {useState} from "react";
import './Navbar.css';
import { logo } from "../../constants/images";
import Button from "../Button";

const Navbar = () => {
  const [visible, setVisible] = useState(false); 


  const handleClick = () => {
    setVisible((prev) => !prev);
  }

  return (
    <header>
      <div className="header__logo">
        <img src={logo} alt="app logo"/>
      </div>
      <nav>
        <ul className={`header__nav ${visible ? "active" : ""}`}>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#product">Product</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#carrers">Carrers</a></li>
          <li><a href="#community">Community</a></li>
        </ul>
      </nav>
      {/* <button className="prueba" >Get Started</button> */}
      <button className={`btn header__menu ${visible ? "close" : ""}`} onClick={handleClick}>Menu</button>
      <Button text="Get Started" hide="hide"/>
    </header>
  )
}

export default Navbar;
