import React from "react";
import logoFooter from "../assets/images/logo-footer.svg";
import location from "../assets/images/icon-location.svg";
import phone from "../assets/images/icon-phone.svg";
import email from "../assets/images/icon-email.svg";
import facebook from "../assets/images/facebook-svgrepo-com.svg";
import twitter from "../assets/images/twitter-svgrepo-com.svg";
import instagram from "../assets/images/instagram-svgrepo-com.svg";
import "./styles.scss";

export const Footer = () => {
  return (
    <div className="hudd-footer row position-relative">
      <div className="hudd-footer__float-panel">
        <div className="hudd-footer__float-panel--title-container">
          <h2 className="hudd-footer__float-panel--title">
            Ready To Build Your Community
          </h2>
        </div>
        <div className="hudd-footer__float-panel--btn-container">
          <button className="hudd-footer__float-panel--btn btn btn-float-panel">
            Get Started For Free
          </button>
        </div>
      </div>
      <div className="hudd-footer__info-list col-md-4 col-sm-12">
        <div className="hudd-footer__info-list--logo-container">
          <img
            src={logoFooter}
            alt="logo"
            className="hudd-footer__info-list--logo"
          />
        </div>
        <div className="hudd-footer__info-list--location">
          <img
            src={location}
            alt="photo"
            className="hudd-footer__info-list--location-logo d-inline-block"
          />
          <p className="hudd-footer__info-list--location-desc d-inline-block">
            Velit cupidatat culpa cupidatat deserunt minim et. Consectetur ipsum
            tempor laboris ea dolore reprehenderit ad enim non nisi ullamco
            ullamco adipisicing.
          </p>
        </div>
        <div className="hudd-footer__info-list--phone">
          <img
            src={phone}
            alt="image"
            className="hudd-footer__info-list--phone-logo"
          />
          <a
            href="tel:123-456-789"
            className="hudd-footer__info-list--phone-number"
          >
            123-456-789
          </a>
        </div>
        <div className="hudd-footer__info-list--email">
          <img
            src={email}
            alt="image"
            className="hudd-footer__info-list--email-logo"
          />
          <a
            href="mailto:huddle@example.com"
            className="hudd-footer__info-list--email-address"
          >
            huddle@example.com
          </a>
        </div>
      </div>
      <div className="hudd-footer__lists-container row col-md-4 col-sm-12">
        <div className="hudd-footer__list-container col-md-6 col-sm-12">
          <ul className="hudd-footer__list">
            <li className="hudd-footer__list-item">About Us</li>
            <li className="hudd-footer__list-item">What We Do</li>
            <li className="hudd-footer__list-item">FAQ</li>
          </ul>
        </div>
        <div className="hudd-footer__list-container col-md-6 col-sm-12">
          <ul className="hudd-footer__list">
            <li className="hudd-footer__list-item">Career</li>
            <li className="hudd-footer__list-item">Blog</li>
            <li className="hudd-footer__list-item">Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="hudd-footer__social col-md-4 col-sm-12">
        <img src={facebook} alt="logo" className="hudd-footer__social--icon" />
        <img src={twitter} alt="logo" className="hudd-footer__social--icon" />
        <img src={instagram} alt="logo" className="hudd-footer__social--icon" />
      </div>
      <div className="hudd-footer__copyright"></div>
    </div>
  );
};
