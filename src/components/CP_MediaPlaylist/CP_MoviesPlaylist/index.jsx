import React from "react";
import PlaylistRow from "../CP_PlaylistRow";
import { CgPlayListAdd } from "react-icons/cg";
import "./styles.scss";
import { addMovie } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../../../data/faker";

const MoviesPlaylist = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleClick = (movie) => {
    dispatch(addMovie(movie));
  };

  const renderedMediaLi = movies.map((movie) => {
    return (
      <li className="playlist__list-item">
        <PlaylistRow song={movie} name={movie} />
      </li>
    );
  });

  return (
    <div className="playlist">
      <div className="playlist__header">
        <h2>Random Movies Playlist</h2>
        <span>
          <button
            className="btn-add btn"
            onClick={() => handleClick(createRandomMovie())}
          >
            <CgPlayListAdd />
          </button>
        </span>
      </div>
      <div className="playlist__list-container">
        {movies.length ? (
          <ul className="playlist__list">{renderedMediaLi}</ul>
        ) : (
          <ul className="playlist__list">
            <li className="playlist__list-item items-free">
              No items in the list
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default MoviesPlaylist;
