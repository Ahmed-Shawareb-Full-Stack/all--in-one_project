import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../../../store";
import ExpandPanel from "../CP_ExpandPanel";

const AlbumsListItem = ({ user, album }) => {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleDeleteAlbum = () => {
    removeAlbum(album);
  };
  const header = (
    <span className="expand-panel__income-header">
      <span className="expand-header__delete-btn-container">
        <button
          className="btn btn__delete btn__delete--user"
          onClick={handleDeleteAlbum}
        >
          <GoTrashcan />
        </button>
      </span>
      <span className="header__title">{album.name}</span>
    </span>
  );

  return (
    <ExpandPanel useFor="album" header={header}>
      <div>Photos</div>
    </ExpandPanel>
  );
};

export default AlbumsListItem;
