import React from "react";
import Button from "../../components/Button";
import { logoAlt } from "../../constants/images";
import "./Footer.css";

import {
  GrFacebook,
  GrYoutube,
  GrInstagram,
  GrPinterest,
  GrTwitter,
} from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inputs">
        <input type="email" placeholder="Updates in your inbox..." />
        <Button text="Go" />
      </div>

      <menu className="footer__links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="#">Produts</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Privacy Policy</a>
        </li>
      </menu>

      <div className="footer__contact">
        <nav className="footer__contact-social">
          <a href="#" target="_blank">
            <GrFacebook />
          </a>
          <a href="#" target="_blank">
            <GrYoutube />
          </a>
          <a href="#" target="_blank">
            <GrTwitter />
          </a>
          <a href="#" target="_blank">
            <GrPinterest />
          </a>
          <a href="#" target="_blank">
            <GrInstagram />
          </a>
        </nav>

        <figure className="footer__contact-img">
          <img src={logoAlt} />
        </figure>
      </div>

      <p className="footer__copy">Copyright 2022. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
