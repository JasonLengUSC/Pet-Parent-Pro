import dogIcon from "../../../assets/dog-icon.jpeg";
import sitterIcon from "../../../assets/dog-sitter-icon.png";

import { HomePageIconWrapper } from "./HomeWrapperStyles";

const IconWrapper = () => {
  return (
    <>
      <HomePageIconWrapper>
        <img src={sitterIcon} alt="link to dog page" />
      </HomePageIconWrapper>
      <HomePageIconWrapper>
        <img src={dogIcon} alt="link to sitter page" />
      </HomePageIconWrapper>
    </>
  );
};

export default IconWrapper;
