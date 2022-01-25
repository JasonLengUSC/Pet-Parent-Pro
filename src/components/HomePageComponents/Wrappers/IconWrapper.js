import dogIcon from "../../../assets/dog-icon.jpeg";
import sitterIcon from "../../../assets/dog-sitter-icon.png";

import classes from "./Wrappers.module.css";

const IconWrapper = () => {
  return (
    <>
      <div className={classes.icon}>
        <img src={sitterIcon} alt="link to dog page" />
      </div>
      <div className={classes.icon}>
        <img src={dogIcon} alt="link to sitter page" />
      </div>
    </>
  );
};

export default IconWrapper;
