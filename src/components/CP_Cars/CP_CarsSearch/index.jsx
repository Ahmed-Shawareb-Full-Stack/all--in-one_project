import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changSearchTerm } from "../../../store";
import "./styles.scss";

const CarsSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.cars.searchTerm);
  const handleSearchTerm = (event) => {
    dispatch(changSearchTerm(event.target.value));
  };
  return (
    <div className="cars-search__container">
      <span className="cars-search__heading d-inline-block">My cars</span>
      <span className="cars-search__input-container d-inline-block">
        <input
          type={`search`}
          name="cars-search"
          id="cars-search"
          className="cars-search__input-search form-control d-inline-block"
          placeholder="Search Cars"
          value={searchTerm}
          onChange={handleSearchTerm}
        />
      </span>
    </div>
  );
};

export default CarsSearch;
