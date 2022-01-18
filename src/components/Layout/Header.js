import NavButton from "../UI/NavButton";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Pet Parent Pro</h1>
        <NavButton>Home</NavButton>
        <NavButton>Dogs</NavButton>
        <NavButton>Sitters</NavButton>
        <NavButton>About</NavButton>
      </header>
      {/* <div >image</div> */}
    </>
  );
};

export default Header;
