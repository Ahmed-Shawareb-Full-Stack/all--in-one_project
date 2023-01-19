import React from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import "./styles.scss";

const Accordion = ({ content }) => {
  return (
    <div className="acc">
      <input
        type="checkbox"
        id={`${content.title}`}
        className="acc__checkbox"
      />
      <div className="acc__title">
        <label
          htmlFor={`${content.title}`}
          className="acc__label position-relative"
        >
          <span>
            <BsChevronDoubleDown className="acc__icon--open position-absolute" />
            <BsChevronDoubleUp className="acc__icon--close position-absolute" />
          </span>
          <span>{content.title}</span>
        </label>
      </div>
      <p className="acc__content">{content.content}</p>
    </div>
  );
};

export default Accordion;
