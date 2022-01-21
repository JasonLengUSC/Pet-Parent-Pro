import { NavLink } from "react-router-dom";
import { FaHome, FaDog, FaPeopleArrows, FaInfo } from "react-icons/fa";

import NavButton from "../UI/NavButton";
import classes from "./Header.module.css";
import headerDogImage from "../../assets/header-dogs.jpeg";
import { useState, Fragment } from "react";

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
  const [login, setLogin] = useState(false);
  return (
    <>
      <header className={classes.header}>
        <div className={classes["header-primary"]}>
          <h1 className={classes["site-name"]}>Pet Parent Pro</h1>
          {[...navBtnArr]}
        </div>
        <div className={classes["header-sign"]}>
          {login ?
            <NavButton>
              <NavLink activeClassName={classes.active} to="/logout">
                Log out
              </NavLink>
            </NavButton>
            :
            <Fragment>
              <NavButton>
                <NavLink activeClassName={classes.active} to="/login">
                  Log in
                </NavLink>
              </NavButton>
              <NavButton>
                <NavLink activeClassName={classes.active} to="/register">
                  Sign up
                </NavLink>
              </NavButton>
            </Fragment>
          }
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img src={headerDogImage} alt="doggies" />
      </div>
    </>
  );
};

export default Header;
