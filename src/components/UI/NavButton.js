import React from "react";
import classes from "./NavButton.module.css";

const NavButton = (props) => {
  return (
    <div>
      {props.icon}
      <button
        className={classes.button}
        type={props.type || "button"}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
};

export default NavButton;
