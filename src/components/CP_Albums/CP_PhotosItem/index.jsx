import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { useDeletePhotoMutation } from "../../../store";
import "./styles.scss";

const PhotoItem = ({ album, photo }) => {
  const [deletePhoto, result] = useDeletePhotoMutation();

  const handleDeletePhoto = () => {
    deletePhoto(photo);
  };
  return (
    <div className="photo-item">
      <div className="photo-item__btns-container">
        <button className="btn btn__delete-photo" onClick={handleDeletePhoto}>
          <MdDeleteForever />
        </button>
      </div>
      <div className="photo-item__photo-container">
        <img src={`${photo.url}`} className="photo-item__photo-container" />
      </div>
    </div>
  );
};

export default PhotoItem;
