import React from "react";
import { useSelector } from "react-redux";
import "./styles.scss";

const CarsValue = () => {
  const carsValue = useSelector(({ cars: { searchTerm, data } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => (acc += car.cost), 0)
  );
  return (
    <div className="cars-value__container">
      <span>Cars Value</span>
      <span className="cars-value__value">{carsValue}</span>
    </div>
  );
};

export default CarsValue;
