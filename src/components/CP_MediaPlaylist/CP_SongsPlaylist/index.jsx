import React from "react";
import PlaylistRow from "../CP_PlaylistRow";
import { CgPlayListAdd } from "react-icons/cg";
import "./styles.scss";
import { createRandomSong } from "../../../data/faker";
import { useDispatch, useSelector } from "react-redux";
import { addSong } from "../../../store/CP_MediaPlaylistStore";

const SongsPlaylist = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => {
    return state.songs;
  });

  const renderedMediaLi = songs.map((song) => {
    return (
      <li className="playlist__list-item" key={song}>
        <PlaylistRow song={song} name={song} />
      </li>
    );
  });

  const handleClick = (song) => {
    dispatch(addSong(song));
  };

  return (
    <div className="playlist">
      <div className="playlist__header">
        <h2>Random Songs Playlist</h2>
        <span>
          <button
            className="btn-add btn"
            onClick={() => handleClick(createRandomSong())}
          >
            <CgPlayListAdd />
          </button>
        </span>
      </div>
      <div className="playlist__list-container ">
        {songs.length ? (
          <ul className="playlist__list">{renderedMediaLi}</ul>
        ) : (
          <ul className="playlist__list">
            <li className="playlist__list-item items-free">
              No items in the list
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SongsPlaylist;
