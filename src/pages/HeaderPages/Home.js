import { useHistory } from "react-router-dom";

import IconWrapper from "../../components/HomePageComponents/Wrappers/IconWrapper";
import ButtonWrapper from "../../components/HomePageComponents/Wrappers/ButtonWrapper";
import DogIcon from "../../components/HomePageComponents/Buttons/DogButton";
import SitterIcon from "../../components/HomePageComponents/Buttons/SitterButton";


const Home = () => {

  let hisotry = useHistory();

  const changeSitterRouteHandler = () => {
    const newPath = "/Dogs";
    hisotry.push(newPath);
  }

  const changeDogRouteHandler = () => {
    const newPath = "/Sitters";
    hisotry.push(newPath);
  }

    return (
        <>
        <IconWrapper />
        <ButtonWrapper>
          <SitterIcon onClick={changeSitterRouteHandler}/>
          <DogIcon onClick={changeDogRouteHandler}/>
        </ButtonWrapper>
        </>
      );
};

export default Home;