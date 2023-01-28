import React from "react";
import { useAddUserMutation } from "../../../store";
import { GoSync } from "react-icons/go";
import "./styles.scss";

const Header = () => {
  const [addUser, results] = useAddUserMutation();
  const { isLoading } = results;
  const handleAddUser = () => {
    console.log(results);
    addUser();
    console.log(results);
  };
  return (
    <div className="user-list-header">
      <span className="user-list-header__title-container">
        <h1 className="user-list-header__title">Users List</h1>
      </span>
      <span className="user-list-header__add-user-btns-container">
        <button className="btn btn__add-user btn__add" onClick={handleAddUser}>
          {isLoading ? (
            <span>
              <GoSync className="spinning-icon add-spinning-icon" />
            </span>
          ) : (
            <span>+ </span>
          )}
          <span>Add User</span>
        </button>
      </span>
    </div>
  );
};

export default Header;
