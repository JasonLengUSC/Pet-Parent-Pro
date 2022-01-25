import { useHistory } from "react-router-dom";

import classes from "./HomePageButtons.module.css";

const DogIcon = () => {
  let hisotry = useHistory();

  const changeDogRouteHandler = () => {
    const newPath = "/Sitters";
    hisotry.push(newPath);
  };

  return (
    <button className={classes.button} onClick={changeDogRouteHandler}>
      Leave Furry Friends in Good Hands!
    </button>
  );
};

export default DogIcon;
