import React from "react";
import Accordion from "../../components/CP_Accordion";
import "./styles.scss";

const accContents = [
  {
    title: "Title 1 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Eiusmod non pariatur amet proident reprehenderit sunt amet voluptate sit sit ullamco aliquip sunt ullamco. Reprehenderit aute ex ipsum est. Tempor sint veniam anim laborum laborum id aute nostrud cillum mollit.",
  },
  {
    title: "Title 2 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Eiusmod non pariatur amet proident reprehenderit sunt amet voluptate sit sit ullamco aliquip sunt ullamco. Reprehenderit aute ex ipsum est. Tempor sint veniam anim laborum laborum id aute nostrud cillum mollit.",
  },
  {
    title: "Title 3 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Eiusmod non pariatur amet proident reprehenderit sunt amet voluptate sit sit ullamco aliquip sunt ullamco. Reprehenderit aute ex ipsum est. Tempor sint veniam anim laborum laborum id aute nostrud cillum mollit.",
  },
  {
    title: "Title 4 ",
    content:
      "Esse laboris laborum anim et reprehenderit nisi cupidatat dolore adipisicing ut irure labore sint. In et exercitation velit irure consequat fugiat. Commodo voluptate aliquip aliqua est. Eiusmod non pariatur amet proident reprehenderit sunt amet voluptate sit sit ullamco aliquip sunt ullamco. Reprehenderit aute ex ipsum est. Tempor sint veniam anim laborum laborum id aute nostrud cillum mollit.",
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
      <div className="acc__container">{renderedAccordions}</div>
    </div>
  );
};

export default AccordionPage;
