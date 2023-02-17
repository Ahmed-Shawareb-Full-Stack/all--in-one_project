import React from "react";
import { Header, Main, Footer } from "../../components/FM_HuddlePage";
import "./styles.scss";

export const HuddlePage = () => {
  return (
    <div className="hudd-page w-100  px-sm-1 px-md-3 container-fluid d-flex flex-column justify-content-center align-items-center">
      <div className="hudd-page__header--container">
        <Header />
      </div>
      <div className="w-100">
        <Main />
      </div>
      <div className="w-100">
        <Footer />
      </div>
    </div>
  );
};
