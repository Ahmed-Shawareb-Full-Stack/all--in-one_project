import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCar,
  changeCarCost,
  changeCarName,
} from "../../../store/CP_CarsStore";
import { BiListPlus } from "react-icons/bi";
import "./styles.scss";

const CarsForm = () => {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.carsForm);

  const handleChangeName = (event) => {
    dispatch(changeCarName(event.target.value));
  };

  const handelChangeCost = (event) => {
    const value = parseFloat(event.target.value) || 0;
    dispatch(changeCarCost(value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };
  return (
    <div className="cars-form__container">
      <form className="cars-form__form" onSubmit={handleSubmit}>
        <label className="cars-form__input-container" htmlFor="car-name">
          <label className="cars-form__label form-label" htmlFor="car-name">
            Car Name
          </label>
          <input
            type={`text`}
            name="car-name"
            id="car-name"
            value={name}
            className="cars-form__input form-control"
            onChange={handleChangeName}
            required
          />
        </label>
        <label className="cars-form__input-container" htmlFor="car-value">
          <label className="cars-form__label form-label" htmlFor="car-value">
            Car Value
          </label>
          <input
            type={`number`}
            name="car-value"
            id="car-value"
            value={cost || ""}
            className="cars-form__input form-control"
            onChange={handelChangeCost}
            required
          />
        </label>

        <span className="d-flex align-items-center btn-cars-form-container justify-content-center">
          <button className="btn btn-submit-cars-form" type="submit">
            <span className="btn-icon">
              <BiListPlus />
            </span>
            <span className="btn-content">Add</span>
          </button>
        </span>
      </form>
    </div>
  );
};

export default CarsForm;
