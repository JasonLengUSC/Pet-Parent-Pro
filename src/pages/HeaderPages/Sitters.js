import { useState } from "react";

import DogForm from "../../forms/DogForm";
import MainHeader from "../../components/UI/MainHeader";
import SitterFilter from "../../filters/SitterFilter";

import { FilterOutlined } from "@ant-design/icons";

import {
  WrapDiv,
  CardStyled,
  FilterDiv,
  ButtonStyled,
} from "./DogSitterStyles";



const userInfo = {
  username: "TestUser01",
  rating: 5,
};

const Sitters = () => {
  const [showDogForm, setShowDogForm] = useState(false);
  const [showFilterDrawer, setshowFilterDrawer] = useState(false);

  const showDogFormHanlder = () => {
    setShowDogForm(true);
  };
  const hideDogFormHanlder = () => {
    setShowDogForm(false);
  };

  const showDrawerHandler = () => {
    setshowFilterDrawer(true);
  };
  const hideDrawerHandler = () => {
    setshowFilterDrawer(false);
  };

  return (
    <>
      <MainHeader />
      <WrapDiv>
      <FilterDiv>
          <FilterOutlined style={{ fontSize: "25px", color: "#695265" }} />
          <ButtonStyled onClick={showDrawerHandler}>Filter</ButtonStyled>
          {showFilterDrawer && (
            <SitterFilter visible={showFilterDrawer} onClose={hideDrawerHandler} />
          )}
        </FilterDiv>
        <CardStyled>
          <p>Didn't find the sitter you want? </p>
          <p>Post your own info!</p>
          <button onClick={showDogFormHanlder}>Fill Out My Info</button>
          {showDogForm && (
            <DogForm userInfo={userInfo} onClose={hideDogFormHanlder} />
          )}
        </CardStyled>
      </WrapDiv>
    </>
  );
};

export default Sitters;
