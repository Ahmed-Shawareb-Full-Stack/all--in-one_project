import React, { useState, useEffect } from "react";
import { GoChevronLeft, GoChevronDown } from "react-icons/go";
import Panel from "../CP_Panel";
import "./styles.scss";

const ExpandPanel = ({ header, children, useFor }) => {
  const [expand, setExpand] = useState(false);
  const handleExpand = () => {
    setExpand(!expand);
  };

  return (
    <div className="expand-panel">
      <div className="expand-panel__header">
        <>{header}</>
        <span className="expand-panel__btn-expand-container">
          <button
            className="btn btn__expand-panel-expand"
            onClick={handleExpand}
          >
            {!expand ? <GoChevronLeft /> : <GoChevronDown />}
          </button>
        </span>
      </div>
      {expand && <Panel useFor={useFor}>{children}</Panel>}
    </div>
  );
};

export default ExpandPanel;
