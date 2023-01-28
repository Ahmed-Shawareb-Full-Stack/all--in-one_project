import React from "react";
import noData from "../../../assets/no_data.png";
import "./styles.scss";

const NoData = () => {
  return (
    <div className="no-data">
      <img src={noData} alt="No Data" className="image-fluid no-data__image" />
    </div>
  );
};

export default NoData;
