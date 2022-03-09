import MainHeader from "./HeaderPlain";
import { MainImgWrapper } from "./HeaderStyles";

import headerDogImage from "../../assets/header-dogs.jpeg";

const Header = () => {
  return (
    <>
      <MainHeader />
      <MainImgWrapper>
        <img src={headerDogImage} alt="doggies" />
      </MainImgWrapper>
    </>
  );
};

export default Header;
