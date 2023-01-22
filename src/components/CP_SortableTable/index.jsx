import React, { useState } from "react";
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs";
import Table from "../CP_Table";
import "./styles.scss";

const SortableTable = (props) => {
  const { config, data } = props;

  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      setSortBy(label);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortBy(label);
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortBy(null);
      setSortOrder(null);
    }
  };

  const modConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          scope="col"
          className="py-1  "
          onClick={() => handleClick(column.label)}
        >
          <span className="d-flex justify-content-center align-items-center">
            <span className="d-inline-block">
              {getIcons(column.label, sortBy, sortOrder)}
            </span>
            <span className="">{column.label}</span>
          </span>
        </th>
      ),
    };
  });

  let sortedData = data;

  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return <Table {...props} config={modConfig} data={sortedData} />;
};

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div className="d-flex flex-column icon__container align-items-center justify-content-center">
        <BsFillCaretUpFill />
        <BsFillCaretDownFill />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div className="d-flex flex-column icon__container align-items-center justify-content-center">
        <BsFillCaretUpFill />
        <BsFillCaretDownFill />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div className="d-flex flex-column icon__container align-items-center justify-content-center">
        <BsFillCaretUpFill />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div className="d-flex flex-column icon__container align-items-center justify-content-center">
        <BsFillCaretDownFill />
      </div>
    );
  }
}

export default SortableTable;
