import React from "react";
import "./styles.scss";
import { useAddAlbumMutation } from "../../../store";
import { CgPlayListAdd } from "react-icons/cg";

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
          <span className="add-album-icon">
            <CgPlayListAdd />
          </span>

          <span className="add-album-text">+ Add Album</span>
        </button>
      </span>
    </div>
  );
};

export default AlbumsListHeader;
