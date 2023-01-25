import React from "react";
import { CgPlayListRemove } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { deleteMovie, deleteSong } from "../../../store/CP_MediaPlaylistStore";
import "./styles.scss";

const PlaylistRow = ({ name }) => {
  const { songs, movies } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleClick = (name) => {
    if (songs.includes(name)) dispatch(deleteSong(name));
    if (movies.includes(name)) dispatch(deleteMovie(name));
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h3 className="media-name">{name}</h3>
      <span>
        <button className="btn-delete btn" onClick={() => handleClick(name)}>
          <CgPlayListRemove />
        </button>
      </span>
    </div>
  );
};

export default PlaylistRow;
