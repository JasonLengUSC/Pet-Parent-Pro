import { useHistory } from "react-router-dom";

import classes from "./HomePageButtons.module.css";

const SitterIcon = () => {
  let hisotry = useHistory();

  const changeSitterRouteHandler = () => {
    const newPath = "/Dogs";
    hisotry.push(newPath);
  };

  return (
    <button className={classes.button} onClick={changeSitterRouteHandler}>
      Interested in becoming a sitter?
    </button>
  );
};

export default SitterIcon;
