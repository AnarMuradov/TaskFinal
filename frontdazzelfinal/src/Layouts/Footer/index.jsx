import React from "react";
import './style.scss'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container__pages">
          <div className="footer__container__pages__title">Other Pages</div>
          <div className="footer__container__pages__items">
            <ul className="footer__container__pages__items__list">
              <li>Home</li>
              <li>Gallery</li>
              <li>Shortcodes</li>
              <li>About</li>
              <li>Languages</li>
            </ul>
          </div>
        </div>
        <div className="footer__container__colorlib">
          <img
            src="https://149842022.v2.pressablecdn.com/wp-content/uploads/sites/54/2014/02/colorlib-logo.png"
            alt=""
          />
          <span>
            Awesome and completely free WordPress WooCommerce themes to take
            your ecommerce website to the next level.
          </span>
          <span>
            If you are having problems with theme setup, please feel free to use
            Colorlib support forum.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
