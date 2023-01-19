import React from "react";
import Accordion from "../../components/CP_Accordion";
import "./styles.scss";

const accContents = [
  {
    title: "Title 1 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est.",
  },
  {
    title: "Title 2 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est.Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. ",
  },
  {
    title: "Title 3 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est.",
  },
  {
    title: "Title 4 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est.Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. ",
  },
];

const AccordionPage = () => {
  const renderedAccordions = accContents.map((content) => {
    return (
      <div className="mb-3">
        <Accordion content={content} />
      </div>
    );
  });
  return (
    <div className="acc__page">
      <h1 className="acc__page--heading">Accordion Component</h1>
      <p className="acc__page--desc">
        Ea ipsum culpa pariatur aliquip anim laborum occaecat amet qui ex
        deserunt quis. Cupidatat proident et nostrud amet ullamco. Aute anim
        irure est commodo fugiat aute do. Ea dolor enim sit sunt labore veniam.
      </p>
      <div className="acc__page--container">{renderedAccordions}</div>
    </div>
  );
};

export default AccordionPage;
