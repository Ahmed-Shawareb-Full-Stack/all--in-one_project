import React, { useState } from "react";
import { BsArrowDownRight } from "react-icons/bs";
import { Outlet } from "react-router-dom";
import Navigation from "../navigation";
import "./styles.scss";

const Layout = () => {
  const [navState, setNavState] = useState();
  const handleNavState = (state) => {
    setNavState(state);
  };

  console.log("left up " + navState);

  return (
    <div className="container-fluid position-relative d-flex ">
      <div
        className={`position-fixed navigation__toggle ${
          navState ? "show-btn" : "hide-btn"
        } `}
      >
        <button
          className="navigation__toggle-btn"
          onClick={() => setNavState(!navState)}
        >
          <BsArrowDownRight style={{ fontSize: "2rem" }} />
        </button>
      </div>
      <div className="row w-100">
        <div
          className={`col-lg-3 ${
            navState ? "hide-Nav" : "show-Nav"
          } navigation`}
        >
          <Navigation onToggle={handleNavState} navState={navState} />
        </div>
        <div
          className={`col-lg-9  outlet position-relative ms-auto ${
            navState ? "outlet-expand" : ""
          } d-flex align-items-center justify-content-center`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
