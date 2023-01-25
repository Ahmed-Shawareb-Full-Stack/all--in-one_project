import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../../../store/CP_CarsStore";
import { RiDeleteBin2Line } from "react-icons/ri";
import "./styles.scss";

const CarsList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ carsForm, cars: { data, searchTerm } }) => {
      const filteredCars = data.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: carsForm.name,
      };
    }
  );

  const handelDelete = (car) => {
    dispatch(removeCar(car));
  };

  let match;

  const renderedCarItem = cars.map((car) => {
    match = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <li
        className={`cars-list__list-item d-flex justify-content-between align-items-center ${
          match && "match-list-item"
        }`}
      >
        <span
          className={` cars-list__info-container ${
            match && "match-info-container"
          }`}
        >
          <span>{car.name} :</span>
          <span> </span>
          <span> ${car.cost}</span>
        </span>
        <span className="w-25 cars-list__delete-btn-container">
          <button
            className="btn btn-remove-car"
            onClick={() => handelDelete(car)}
          >
            <span className="btn-icon-delete">
              <RiDeleteBin2Line />
            </span>
            <span className="btn-content">Delete</span>
          </button>
        </span>
      </li>
    );
  });

  return (
    <div className={`cars-list__container ${match && "match-container"}`}>
      {cars.length ? (
        <ul className="cars-list__list">{renderedCarItem}</ul>
      ) : (
        <ul className="cars-list__list">
          <li className="cars-list__list-item d-flex justify-content-between align-items-center">
            No cars in the list
          </li>
        </ul>
      )}
    </div>
  );
};

export default CarsList;
