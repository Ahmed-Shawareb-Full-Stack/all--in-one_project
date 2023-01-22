import React, { useEffect, useRef, useState } from "react";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";
import "./styles.scss";

const DropDown = ({ options, value, onChange }) => {
  const dropdownEl = useRef();
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (!dropdownEl.current) {
        return;
      }
      if (!dropdownEl.current.contains(event.target)) {
        setExpand(false);
      }
    };
    document.addEventListener("click", handler, true);
  }, []);

  const handleExpand = () => {
    setExpand(!expand);
  };

  const handleOptionSelect = (option) => {
    setExpand(!expand);
    onChange(option);
  };
  const renderedOptions = options.map((option) => {
    return (
      <li
        key={option.value}
        className={`dropdown__option ${value?.option}`}
        onClick={() => handleOptionSelect(option)}
      >
        {option.option}
      </li>
    );
  });
  return (
    <div ref={dropdownEl} className="dropdown">
      <div
        className={`dropdown__select position-relative ${value?.option}`}
        onClick={handleExpand}
      >
        {value?.option || "Select ..."}
        {expand ? (
          <BsChevronDoubleUp className="dropdown__select--icon" />
        ) : (
          <BsChevronDoubleDown className="dropdown__select--icon" />
        )}
      </div>
      <div className={`dropdown__options--container ${expand ? "expand" : ""}`}>
        <ul className={`dropdown__options--list ${expand ? "expand" : ""}`}>
          {renderedOptions}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
