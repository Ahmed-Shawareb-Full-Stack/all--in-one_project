import React from "react";
import ExpandPanel from "../CP_ExpandPanel";
import { GoTrashcan } from "react-icons/go";
import "./styles.scss";
import { useDeleteUserMutation, useFetchAlbumsQuery } from "../../../store";
import AlbumsList from "../CP_AlbumsList";

const UserListItem = ({ user }) => {
  const [deleteUser, results] = useDeleteUserMutation();

  const handleDeleteUser = () => {
    deleteUser(user);
  };

  const header = (
    <span className="expand-panel__income-header">
      <span className="expand-header__delete-btn-container">
        <button
          className="btn btn__delete btn__delete--user"
          onClick={handleDeleteUser}
        >
          <GoTrashcan />
        </button>
      </span>
      <span className="header__title">{user.name}</span>
    </span>
  );
  return (
    <ExpandPanel header={header} useFor="users">
      <div style={{ height: "100%" }}>
        <AlbumsList user={user} />
      </div>
    </ExpandPanel>
  );
};

export default UserListItem;
