import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/CP_MediaPlaylist/moviesSlice";
import { songsReducer } from "./slices/CP_MediaPlaylist/songsSlice";
import { addSong, deleteSong } from "./slices/CP_MediaPlaylist/songsSlice";
import { addMovie, deleteMovie } from "./slices/CP_MediaPlaylist/moviesSlice";
import { RESET_PLAYLISTS } from "./actions/CP_MediaPlaylist/actions";
import { createCarFormReducer } from "./slices/CP_Cars/slices/createCarFormSlice";
import { carsListReducer } from "./slices/CP_Cars/slices/carsListSlice";
import {
  changeCarName,
  changeCarCost,
} from "./slices/CP_Cars/slices/createCarFormSlice";
import {
  changSearchTerm,
  addCar,
  removeCar,
} from "./slices/CP_Cars/slices/carsListSlice";

const store = configureStore({
  reducer: {
    //* ─── CP - Media Playlist State ───────────────────────────────

    songs: songsReducer,
    movies: moviesReducer,

    //* ─── Cp - Cars State ─────────────────────────────────────────

    carsForm: createCarFormReducer,
    cars: carsListReducer,
  },
});

export {
  store,
  addSong,
  deleteSong,
  addMovie,
  deleteMovie,
  RESET_PLAYLISTS,
  changeCarName,
  changSearchTerm,
  changeCarCost,
  addCar,
  removeCar,
};
