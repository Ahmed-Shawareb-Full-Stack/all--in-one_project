import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "./slices/CP_MediaPlaylist/moviesSlice";
import { songsReducer } from "./slices/CP_MediaPlaylist/songsSlice";
import { addSong, deleteSong } from "./slices/CP_MediaPlaylist/songsSlice";
import { addMovie, deleteMovie } from "./slices/CP_MediaPlaylist/moviesSlice";
import { RESET_PLAYLISTS } from "./actions/CP_MediaPlaylist/actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

export { store, addSong, deleteSong, addMovie, deleteMovie, RESET_PLAYLISTS };
