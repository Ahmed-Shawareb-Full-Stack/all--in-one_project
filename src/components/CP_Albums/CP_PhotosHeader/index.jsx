import React from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { useAddPhotoMutation } from "../../../store/apis/photosApi";
import "./styles.scss";

const PhotosHeader = ({ album }) => {
  const [addPhoto, results] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div className="photos-header">
      <span className="photos-header__title">
        <span className="photos-header__user-name">{album.name}'s </span>
        <span className="photos-header__user-name-cont">Photos</span>
      </span>
      <span className="photos-header__btns-container">
        <button className="btn btn__add-photo" onClick={handleAddPhoto}>
          <span className="add-photo-icon">
            <MdOutlineAddPhotoAlternate />
          </span>
          <span className="add-photo-text">+ Add Photo</span>
        </button>
      </span>
    </div>
  );
};

export default PhotosHeader;
