import { configureStore } from "@reduxjs/toolkit";
import { createCarFormReducer } from "./slices/createCarFormSlice";
import { carsListReducer } from "./slices/carsListSlice";
import { changeCarName, changeCarCost } from "./slices/createCarFormSlice";
import { changSearchTerm, addCar, removeCar } from "./slices/carsListSlice";

const carsStore = configureStore({
  reducer: {
    carsForm: createCarFormReducer,
    cars: carsListReducer,
  },
});

export {
  carsStore,
  changeCarName,
  changSearchTerm,
  changeCarCost,
  addCar,
  removeCar,
};
