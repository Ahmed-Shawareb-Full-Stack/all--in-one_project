import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
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
import { usersApi } from "./apis/usersApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";

const store = configureStore({
  reducer: {
    //* ─── CP - Media Playlist State ───────────────────────────────

    songs: songsReducer,
    movies: moviesReducer,

    //* ─── Cp - Cars State ─────────────────────────────────────────

    carsForm: createCarFormReducer,
    cars: carsListReducer,

    //* ─── Cp - Albums State ───────────────────────────────────────

    [usersApi.reducerPath]: usersApi.reducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      usersApi.middleware,
      albumsApi.middleware
    );
  },
});

setupListeners(store.dispatch);

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

export {
  useFetchUsersQuery,
  useAddUserMutation,
  useDeleteUserMutation,
} from "./apis/usersApi";

export {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "./apis/albumsApi";
