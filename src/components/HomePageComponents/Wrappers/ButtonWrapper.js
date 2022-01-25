import classes from "./Wrappers.module.css";

const ButtonWrapper = (props) => {
  return (
      <main className={classes.wrapper}>{props.children}</main>
  );
};

export default ButtonWrapper;
