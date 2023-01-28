import React from "react";
import Header from "../../components/CP_Albums/CP_Header";
import Skelton from "../../components/CP_Albums/CP_Skelton";
import UserList from "../../components/CP_Albums/CP_UsersList";
import "./styles.scss";

const AlbumsPage = () => {
  return (
    <div className="albums-page">
      <div className="albums-comps-container">
        <div className="header-comp">
          <Header />
        </div>
        <div className="users-list-comp">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default AlbumsPage;
