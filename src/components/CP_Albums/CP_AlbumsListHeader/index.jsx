import React from "react";
import "./styles.scss";
import { useAddAlbumMutation } from "../../../store";

const AlbumsListHeader = ({ user }) => {
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };
  return (
    <div className="albums-list-header">
      <span className="albums-list-header__title">
        <span className="albums-list-header__user-name">{user.name}'s </span>
        <span className="albums-list-header__user-name-cont">Albums</span>
      </span>
      <span className="albums-list-header__btns-container">
        <button className="btn btn__add-album" onClick={handleAddAlbum}>
          Add Album
        </button>
      </span>
    </div>
  );
};

export default AlbumsListHeader;
