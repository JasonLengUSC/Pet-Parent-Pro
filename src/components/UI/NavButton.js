import React from "react";
import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <a href={props.url}>
      {props.icon}
      <button
        className={classes.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </a>
  );
};

export default NavButton;
