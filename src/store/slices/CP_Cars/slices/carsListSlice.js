import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsListSlice = createSlice({
  name: "carsList",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      if (!action.payload.name || !action.payload.cost) {
        return;
      }
      const car = {
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      };
      state.data.push(car);
    },
    removeCar(state, action) {
      const cars = state.data.filter((car) => car.id !== action.payload.id);
      state.data = cars;
    },
  },
});

export const { changSearchTerm, addCar, removeCar } = carsListSlice.actions;
export const carsListReducer = carsListSlice.reducer;
