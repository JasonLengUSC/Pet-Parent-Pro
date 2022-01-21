import classes from "./HomePageButtons.module.css";
import sitterIcon from "../../assets/dog-sitter-icon.png";
import dogIcon from "../../assets/dog-icon.jpeg";

const HomePageButtons = () => {
  return (
    <div className={classes.div}>
      <div>
        <div className={classes.icon}>
          <img src={sitterIcon} alt="become a sitter" />
        </div>
        <button className={classes.button}>Interested in becoming a sitter?</button>
      </div>

      <div>
        <div className={classes.icon}>
          <img src={dogIcon} alt="become a sitter" />
        </div>
        <button className={classes.button}>Leave Furry Friends in Good Hands!</button>
      </div>
    </div>
  );
};

export default HomePageButtons;
