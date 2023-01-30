import React from "react";
import { useFetchUsersQuery } from "../../../store";
import NoData from "../CP_NoData";
import Skelton from "../CP_Skelton";
import UserListItem from "../CP_UsersListItem";

import "./styles.scss";
const UserList = () => {
  const { data, isLoading, isFetching, error } = useFetchUsersQuery();
  console.log(data);

  let content;

  isLoading || isFetching
    ? (content = <Skelton number={5} type="row" />)
    : error
    ? (content = <div>Error</div>)
    : !data.length
    ? (content = (
        <>
          <NoData />
        </>
      ))
    : (content = data.map((user) => {
        return <UserListItem user={user} />;
      }));

  return (
    <div className="users-list">
      <>{content}</>
    </div>
  );
};

export default UserList;
