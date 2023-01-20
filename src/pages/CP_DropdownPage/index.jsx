import React, { useState } from "react";
import DropDown from "../../components/CP_Dropdown";
import "./styles.scss";

const options = [
  {
    option: "RED",
    value: "opt1",
  },
  {
    option: "GREEN",
    value: "opt2",
  },
  {
    option: "BLUE",
    value: "opt3",
  },
];

const DropdownPage = () => {
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  };
  return (
    <div className={`dropdown__page page__selected-${selection?.option}`}>
      <h1
        className={`dropdown__page--title title__selected-${selection?.option} `}
      >
        Dropdown Component
      </h1>
      <p className={`dropdown__page--desc desc__selected-${selection?.option}`}>
        Exercitation fugiat labore consequat dolor laboris duis veniam occaecat
        non culpa occaecat eu ullamco. Eu irure ut culpa qui incididunt
        excepteur ullamco minim dolor id magna ut. Non velit sit cupidatat
        commodo eu voluptate ex esse consequat.
      </p>
      <div className="dropdown__page--component">
        <DropDown
          options={options}
          value={selection}
          onChange={handleSelection}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
