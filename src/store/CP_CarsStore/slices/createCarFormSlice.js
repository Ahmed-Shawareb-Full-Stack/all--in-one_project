import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsListSlice";

const createCarFormSlice = createSlice({
  name: "createCar",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeCarName(state, action) {
      state.name = action.payload;
    },
    changeCarCost(state, action) {
      if (action.payload < 0) return;
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar(), (state, action) => {
      state.name = "";
      state.cost = 0;
    });
  },
});

export const { changeCarName, changeCarCost } = createCarFormSlice.actions;
export const createCarFormReducer = createCarFormSlice.reducer;
