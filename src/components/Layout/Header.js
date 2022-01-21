import { NavLink } from "react-router-dom";
import { FaHome, FaDog, FaPeopleArrows, FaInfo } from "react-icons/fa";

import NavButton from "../UI/NavButton";
import classes from "./Header.module.css";
import headerDogImage from "../../assets/header-dogs.jpeg";

const headerItems = [
  {
    id: "link1",
    url: "/home",
    text: "Home",
    icon: <FaHome />,
  },
  {
    id: "link2",
    url: "/dogs",
    text: "Find Your Lovely Guests ",
    icon: <FaDog />,
  },
  {
    id: "link3",
    url: "/sitters",
    text: "Find Your Trusted Dog Sitters",
    icon: <FaPeopleArrows />,
  },
  {
    id: "link4",
    url: "/about",
    text: "About us",
    icon: <FaInfo />,
  },
];

const navBtnArr = headerItems.map((item) => {
  const { id, url, text, icon } = item;
  return (
    <NavButton key={id} icon={icon}>
      <NavLink activeClassName={classes.active} to={url}>
        {text}
      </NavLink>
    </NavButton>
  );
});

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes["site-name"]}>Pet Parent Pro</h1>
        {[...navBtnArr]}
      </header>
      <div className={classes["main-image"]}>
        <img src={headerDogImage} alt="doggies"/>
      </div>
    </>
  );
};

export default Header;
