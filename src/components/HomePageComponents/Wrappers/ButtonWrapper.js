import { HomePageBtnWrapper } from "./HomeWrapperStyles";

const ButtonWrapper = (props) => {
  return (
    <HomePageBtnWrapper>{props.children}</HomePageBtnWrapper>
  );
};

export default ButtonWrapper;
