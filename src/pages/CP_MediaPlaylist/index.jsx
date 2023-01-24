import React from "react";
import { useDispatch } from "react-redux";
import MoviesPlaylist from "../../components/CP_MoviesPlaylist";
import SongsPlaylist from "../../components/CP_SongsPlaylist";
import { RESET_PLAYLISTS } from "../../store";
import "./styles.scss";

const MediaPlaylist = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(RESET_PLAYLISTS());
  };
  return (
    <div className="medialist-page">
      <div className="comp-container">
        <div className="reset">
          <button className="btn btn-reset" onClick={handleClick}>
            Reset Media Playlist
          </button>
        </div>
        <div className="media-container">
          <SongsPlaylist />
        </div>
        <div className="media-container">
          <MoviesPlaylist />
        </div>
      </div>
    </div>
  );
};

export default MediaPlaylist;
