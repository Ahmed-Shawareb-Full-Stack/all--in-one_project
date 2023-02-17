import { NavLink } from "react-router-dom";
import {
  BsChevronExpand,
  BsChevronContract,
  BsArrowUpLeft,
} from "react-icons/bs";
import "./styles.scss";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

const selfProjectsNavLinks = [
  {
    to: "/",
    title: "Home",
  },
];
const courseProjectsNavLinks = [
  {
    to: "/accordion",
    title: "CP - Accordion Component",
  },
  {
    to: "/dropdown",
    title: "CP - Dropdown Component",
  },
  {
    to: "/table",
    title: "CP - Table",
  },
  {
    to: "/counter",
    title: "CP - Counter",
  },
  {
    to: "/mediaplaylist",
    title: "CP - Media PlayList",
  },
  {
    to: "/cars",
    title: "CP - Cars",
  },
  {
    to: "/albums",
    title: "CP - Albums",
  },
];
const frontendMentorNavLinks = [
  {
    to: "/huddle",
    title: "Huddle Page",
  },
];

const Navigation = ({ onToggle, navState }) => {
  const matchQ = useMedia("(max-width : 991.98px )");
  const [expandNav, setExpandNav] = useState(true);
  const [expandSelf, setExpandSelf] = useState(false);
  const [expandCourse, setExpandCourse] = useState(false);
  const [expandMentor, setExpandMentor] = useState(false);

  const handleNavState = () => {
    setExpandNav(!expandNav);
    onToggle(expandNav);
  };

  useEffect(() => {
    onToggle(!expandNav);
  }, []);

  useEffect(() => {
    setExpandNav(!navState);
  }, [navState]);

  const handleSelfTabClick = () => {
    setExpandSelf(!expandSelf);
  };

  const handleCourseTabClick = () => {
    setExpandCourse(!expandCourse);
  };

  const handleMentorTabClick = () => {
    setExpandMentor(!expandMentor);
  };

  const handleClickMediaMatched = () => {
    if (matchQ) {
      setExpandNav(!expandNav);
      onToggle(expandNav);
    } else return;
  };

  const renderedSelfProjectsNavLinks = selfProjectsNavLinks.map((navLink) => (
    <li
      onClick={handleClickMediaMatched}
      key={navLink.to}
      className="nav__list-item"
    >
      <NavLink to={navLink.to} className={`nav__link `}>
        {navLink.title}
      </NavLink>
    </li>
  ));

  const renderedCourseProjectsNavLinks = courseProjectsNavLinks.map(
    (navLink) => (
      <li
        onClick={handleClickMediaMatched}
        key={navLink.to}
        className="nav__list-item"
      >
        <NavLink to={navLink.to} className={`nav__link `}>
          {navLink.title}
        </NavLink>
      </li>
    )
  );

  const renderedFrontendMentorNavLinks = frontendMentorNavLinks.map(
    (navLink) => (
      <li
        onClick={handleClickMediaMatched}
        key={navLink.to}
        className="nav__list-item"
      >
        <NavLink to={navLink.to} className={`nav__link `}>
          {navLink.title}
        </NavLink>
      </li>
    )
  );

  return (
    <div>
      <div className="nav__toggle position-fixed">
        <button className="nav__toggle-btn" onClick={handleNavState}>
          <BsArrowUpLeft style={{ fontSize: "2rem" }} />
        </button>
      </div>
      <nav className="nav d-flex flex-column p-2 position-relative">
        <h1 className="nav__title text-center">All-in-one project</h1>
        <div className={`nav__tab mt-3`} onClick={handleSelfTabClick}>
          <div className="nav__tab-title d-flex">
            <span className="me-auto">Self-Learning Projects</span>
            {expandSelf ? (
              <span className="ms-auto">
                <BsChevronContract />
              </span>
            ) : (
              <span className="ms-auto">
                <BsChevronExpand />
              </span>
            )}
          </div>
        </div>
        <div className={`nav__links-container  `}>
          <ul className={`nav__projects-list ${expandSelf ? "expanded" : ""}`}>
            {renderedSelfProjectsNavLinks}
          </ul>
        </div>
        <div className="nav__tab  mt-3" onClick={handleCourseTabClick}>
          <div className="nav__tab-title d-flex">
            <span> Modern React Course Projects</span>
            {expandCourse ? (
              <span className="ms-auto">
                <BsChevronContract />
              </span>
            ) : (
              <span className="ms-auto">
                <BsChevronExpand />
              </span>
            )}
          </div>
        </div>
        <div className={`nav__links-container `}>
          <ul
            className={`nav__projects-list ${expandCourse ? "expanded" : ""}`}
          >
            {renderedCourseProjectsNavLinks}
          </ul>
        </div>
        <div className="nav__tab   mt-3" onClick={handleMentorTabClick}>
          <div className="nav__tab-title d-flex">
            <span>Frontend Mentor Projects</span>
            {expandMentor ? (
              <span className="ms-auto">
                <BsChevronContract />
              </span>
            ) : (
              <span className="ms-auto">
                <BsChevronExpand />
              </span>
            )}
          </div>
        </div>
        <div className={`nav__links-container `}>
          <ul
            className={`nav__projects-list ${expandMentor ? "expanded" : ""}`}
          >
            {renderedFrontendMentorNavLinks}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
