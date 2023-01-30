import React, { useRef } from "react";
import { useFetchPhotosQuery } from "../../../store";
import NoData from "../CP_NoData";
import PhotosHeader from "../CP_PhotosHeader";
import PhotoItem from "../CP_PhotosItem";
import Skelton from "../CP_Skelton";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import "./styles.scss";

const Photos = ({ album }) => {
  const { data, isLoading, isFetching, isError } = useFetchPhotosQuery(album);

  const scroll = useRef(null);

  const horizScroll = (element, speed, dist, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      element.scrollLeft += step;
      scrollAmount += Math.abs(step);
      if (scrollAmount >= dist) {
        clearInterval(slideTimer);
      }
    }, speed);
  };

  let content;

  isLoading || isFetching
    ? (content = <Skelton number={3} type="image" />)
    : isError
    ? (content = <div>error</div>)
    : !data.length
    ? (content = (
        <>
          <NoData />
        </>
      ))
    : (content = data.map((photo) => {
        return <PhotoItem album={album} photo={photo} />;
      }));

  return (
    <div className="photos">
      <div className="photos__header">
        <PhotosHeader album={album} />
      </div>
      <div className="position-relative ">
        <div className="slide-btns-container">
          <div className="slide slide__left">
            <button
              className="btn btn__slide btn__slide-left rounded-circle"
              onClick={() => {
                horizScroll(scroll.current, 25, 100, -10);
              }}
            >
              <BsChevronDoubleLeft />
            </button>
          </div>
          <div className="slide slide__right">
            <button
              className="btn btn__slide btn__slide-right rounded-circle"
              onClick={() => {
                horizScroll(scroll.current, 25, 100, 10);
              }}
            >
              <BsChevronDoubleRight />
            </button>
          </div>
        </div>
        <div ref={scroll} className="photos__items">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Photos;
