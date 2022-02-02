import { useHistory } from "react-router-dom";
import { HomePageBtn } from "./HomeBtnStyles";

const DogIcon = () => {
  let hisotry = useHistory();

  const changeDogRouteHandler = () => {
    const newPath = "/Sitters";
    hisotry.push(newPath);
  };

  return (
    <HomePageBtn onClick={changeDogRouteHandler}>
      Leave Furry Friends in Good Hands!
    </HomePageBtn>
  );
};

export default DogIcon;
