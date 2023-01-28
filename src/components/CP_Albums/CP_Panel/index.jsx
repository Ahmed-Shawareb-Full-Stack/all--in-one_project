import React, { useState } from "react";

const Panel = ({ children, useFor }) => {
  let useForClass;

  if (useFor === "users") {
    useForClass = "expand-panel__panel-user";
  } else if (useFor === "album") {
    useForClass = "expand-panel__panel-album";
  }

  return <div className={useForClass}>{children}</div>;
};

export default Panel;
