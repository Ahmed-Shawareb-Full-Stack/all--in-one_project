import React, { Fragment } from "react";
import "./styles.scss";

const Table = ({ data, config, keyFn }) => {
  const renderedTh = config.map((column) => {
    if (column.header) {
      return <Fragment key={keyFn(column.label)}>{column.header()}</Fragment>;
    }
    return (
      <th scope="col" className=" " key={keyFn(column.label)}>
        {column.label}
      </th>
    );
  });

  const renderedTr = data.map((col) => {
    const renderedTd = config.map((config) => {
      return (
        <td className="py-3 px-5" key={keyFn(config.label)}>
          {config.render(col)}
        </td>
      );
    });

    return <tr key={keyFn(col.name)}>{renderedTd}</tr>;
  });

  return (
    <table className="table align-middle text-center table-hoverable">
      <thead className="table-dark align-middle">
        <tr>{renderedTh}</tr>
      </thead>
      <tbody>{renderedTr}</tbody>
    </table>
  );
};

export default Table;
