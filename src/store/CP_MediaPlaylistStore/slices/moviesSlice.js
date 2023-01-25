import { createSlice } from "@reduxjs/toolkit";
import { RESET_PLAYLISTS } from "../../actions/CP_MediaPlaylist/actions";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    deleteMovie(state, action) {
      const movieIndex = state.indexOf(action.payload);
      state.splice(movieIndex, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(RESET_PLAYLISTS, (state, action) => {
      return [];
    });
  },
});

export const { addMovie, deleteMovie } = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;
