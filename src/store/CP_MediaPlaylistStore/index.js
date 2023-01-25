import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/moviesSlice";
import { songsReducer } from "./slices/songsSlice";
import { addSong, deleteSong } from "./slices/songsSlice";
import { addMovie, deleteMovie } from "./slices/moviesSlice";
import { RESET_PLAYLISTS } from "./actions";

const mediaPlaylistStore = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export {
  mediaPlaylistStore,
  addSong,
  deleteSong,
  addMovie,
  deleteMovie,
  RESET_PLAYLISTS,
};
