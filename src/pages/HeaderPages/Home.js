
import IconWrapper from "../../components/HomePageComponents/Wrappers/IconWrapper";
import ButtonWrapper from "../../components/HomePageComponents/Wrappers/ButtonWrapper";
import DogIcon from "../../components/HomePageComponents/Buttons/DogButton";
import SitterIcon from "../../components/HomePageComponents/Buttons/SitterButton";


const Home = () => {

  


    return (
        <>
        <IconWrapper />
        <ButtonWrapper>
          <SitterIcon />
          <DogIcon />
        </ButtonWrapper>
        </>
      );
};

export default Home;