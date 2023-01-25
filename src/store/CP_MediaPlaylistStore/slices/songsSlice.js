import { createSlice } from "@reduxjs/toolkit";
import { RESET_PLAYLISTS } from "../../actions/CP_MediaPlaylist/actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    deleteSong(state, action) {
      const songIndex = state.indexOf(action.payload);
      state.splice(songIndex, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(RESET_PLAYLISTS, (state, action) => {
      return [];
    });
  },
});

export const { addSong, deleteSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
