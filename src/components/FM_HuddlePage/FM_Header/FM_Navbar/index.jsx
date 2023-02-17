import React from "react";
import logo from "./../../assets/images/logo.svg";
import "./styles.scss";

export const HuddleNavBar = () => {
  return (
    <div className="hudd-navbar row px-md-5 px-sm-2">
      <div className="hudd-navbar__logo-container col-md-6 col-sm-12 d-flex justify-content-md-start ">
        <img className="hudd-navbar__logo" src={logo} alt="logo" />
      </div>
      <div className="hudd-navbar__btn-navbar-container col-md-6 d-none  d-md-flex justify-content-md-end justify-content-sm-center">
        <button className="hudd-navbar__btn-navbar btn btn-navbar d-md-block d-none">
          Try It Free
        </button>
      </div>
    </div>
  );
};
