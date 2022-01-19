import NavButton from "../UI/NavButton";
import classes from "./Header.module.css";
import { FaHome, FaDog, FaPeopleArrows, FaInfo } from 'react-icons/fa';


const headerItems = [
  {
    id: "link1",
    url: "/",
    text: "Home",
    icon: <FaHome />
  },
  {
    id: "link2",
    url: "/dogs",
    text: "Dogs",
    icon: <FaDog />
  },
  {
    id: "link3",
    url: "/sitters",
    text: "Sitters",
    icon: <FaPeopleArrows />
  },
  {
    id: "link4",
    url: "/about",
    text: "About",
    icon: <FaInfo />
  },
];

const navBtnArr = headerItems.map((item) => {
  const { id, url, text, icon } = item;
  return (
    <NavButton
      key={id}
      url={url}
      icon={icon}
    >
      {text}
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
    </>
  );
};

export default Header;
