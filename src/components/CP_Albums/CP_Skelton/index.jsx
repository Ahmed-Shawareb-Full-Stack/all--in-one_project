import React from "react";
import "./styles.scss";
const Skelton = ({ number, type }) => {
  const times = Array(number).fill(0);
  let content;

  if (type === "image") {
    content = times.map((skelton) => {
      return <div className="skelton-image"></div>;
    });
  } else if (type === "row") {
    content = times.map((skelton) => {
      return <div className="skelton-row"></div>;
    });
  }

  return <div className="skelton__container">{content}</div>;
};

export default Skelton;
