import React from "react";
import SortableTable from "../../components/CP_SortableTable";
import Table from "../../components/CP_Table";
import "./styles.scss";

const data = [
  { name: "fruit 1", color: "red", score: 5 },
  { name: "fruit 2", color: "yellow", score: 3 },
  { name: "fruit 3", color: "green", score: 1 },
  { name: "fruit 4", color: "blue", score: 12 },
];

const colorCol = (fruit) => {
  return (
    <div
      style={{ backgroundColor: fruit.color }}
      className={`table__color p-4`}
    ></div>
  );
};

/*
!sorting logic : 

input : [{...some data 5} , {...some data 6} , {...some data 1}],


output : [{...some data 1} , {...some data 5} , {...some data 6}],

function sortValue(obj){
  return obj.score
}

const sortOrder = "asc"

data.sort((a,b)=>{
  let sortValue$a = sortValue(a);
  let sortValue$b = sortValue(b);

  let order = sortOrder ==="asc" ? 1 : -1

  if (typeof sortValue$a === "string"){
  return sortValue$a.localeCompare(sortValue$b) * order
  } else {
  return (sortValue$a - sortValue$b) * order
  }
})






*/

const tableConfig = [
  {
    label: "Fruits",
    render: (fruit) => fruit.name,
    sortValue: (fruit) => fruit.name,
  },
  {
    label: "Color",
    render: (fruit) => colorCol(fruit),
  },
  {
    label: "Score",
    render: (fruit) => fruit.score,
    sortValue: (fruit) => fruit.score,
  },
];

const keyFn = (key) => {
  return key;
};

const TablePage = () => {
  return (
    <div className="table__page table-responsive">
      <SortableTable data={data} config={tableConfig} keyFn={keyFn} />
    </div>
  );
};

export default TablePage;
