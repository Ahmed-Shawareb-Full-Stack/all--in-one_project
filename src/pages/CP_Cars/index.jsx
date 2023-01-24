import React from "react";
import CarsForm from "../../components/CP_Cars/CP_CarsForm";
import CarsList from "../../components/CP_Cars/CP_CarsList";
import CarsSearch from "../../components/CP_Cars/CP_CarsSearch";
import CarsValue from "../../components/CP_Cars/CP_CarsValue";
import "./styles.scss";

const CarsPage = () => {
  return (
    <div className="cars-page">
      <div className="comps-container">
        <div className="cars-form-container">
          <CarsForm />
        </div>
        <div className="cars-search-container">
          <CarsSearch />
        </div>
        <div className="cars-list-container">
          <CarsList />
        </div>
        <div className="cars-value-container">
          <CarsValue />
        </div>
      </div>
    </div>
  );
};

export default CarsPage;
