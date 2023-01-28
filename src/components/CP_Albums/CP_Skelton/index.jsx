import React from "react";
import "./styles.scss";
const Skelton = ({ number }) => {
  const times = Array(number).fill(0);

  const content = times.map((skelton) => {
    return <div className="skelton"></div>;
  });
  return <div className="skelton__container">{content}</div>;
};

export default Skelton;
