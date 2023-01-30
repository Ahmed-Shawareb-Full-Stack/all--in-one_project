import React from "react";
import { useFetchAlbumsQuery } from "../../../store";
import AlbumsListHeader from "../CP_AlbumsListHeader";
import AlbumsListItem from "../CP_AlbumsListItem";
import ExpandPanel from "../CP_ExpandPanel";
import NoData from "../CP_NoData";
import Skelton from "../CP_Skelton";
import "./styles.scss";

const AlbumsList = ({ user }) => {
  const { data, isLoading, isFetching, isError } = useFetchAlbumsQuery(user);
  let content;

  isLoading || isFetching
    ? (content = <Skelton number={5} type="row" />)
    : isError
    ? (content = <div>error</div>)
    : !data.length
    ? (content = (
        <>
          <NoData />
        </>
      ))
    : (content = data.map((album) => {
        return <AlbumsListItem user={user} album={album} />;
      }));

  return (
    <div className="albums-list">
      <div className="albums-list__header--container">
        <AlbumsListHeader user={user} />
      </div>
      <div className="albums-list__albums-container">{content}</div>
    </div>
  );
};

export default AlbumsList;
