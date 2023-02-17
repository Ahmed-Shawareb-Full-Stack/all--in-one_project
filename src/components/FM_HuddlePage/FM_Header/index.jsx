import React from "react";
import { HuddleNavBar } from "./FM_Navbar";
import { Hero } from "./FM_Hero";
import "./styles.scss";

export const Header = () => {
  return (
    <header className="hudd-header d-flex flex-column align-items-center">
      <div className="hudd-haeder__navbar--container container position-relative">
        <HuddleNavBar />
      </div>
      <div className="hudd-haeder__hero--container container-fluid ">
        <Hero />
      </div>
    </header>
  );
};
