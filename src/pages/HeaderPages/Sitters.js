import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_SITTERS } from "../../datas/mockDatas/DummySitters";
import { DUMMY_USER_FOR_DOG_FORM_ON_SITTER_PAGE } from "../../datas/mockDatas/DummyUserInfo";

import DogForm from "../../forms/DogForm";
import MainHeader from "../../components/UI/MainHeader";
import SitterFilter from "../../filters/SitterFilter";
import SitterCard from "../../components/Card/SitterCard";

import { Row, Col } from "antd";

import { BackDiv, SitterButton, WrapDiv } from "./SitterStyles";

const Sitters = () => {
  const [showDogForm, setShowDogForm] = useState(false);
  const showDogFormHandler = () => {
    setShowDogForm(true);
  };
  const hideDogFormHandler = () => {
    setShowDogForm(false);
  };

  return (
    <>
      <MainHeader />
      <BackDiv />
      <SitterFilter />
      <SitterButton onClick={showDogFormHandler}>Post Dog's Info</SitterButton>
      {showDogForm && (
        <DogForm
          userInfo={DUMMY_USER_FOR_DOG_FORM_ON_SITTER_PAGE}
          onClose={hideDogFormHandler}
        />
      )}
      <WrapDiv>
        <Row>
          {DUMMY_SITTERS.map((sitter, index) => {
            return (
              <Col key={"Sitter" + index} span={24}>
                <Link to={`/sitters/${sitter.sitterId}`}>
                  <SitterCard
                    sitterId={sitter.sitterId}
                    rating={sitter.rating}
                    date={sitter.date}
                    preferedSize={sitter.preferedSize}
                    region={sitter.region}
                    tag={sitter.tag}
                  />
                </Link>
              </Col>
            );
          })}
        </Row>
      </WrapDiv>
    </>
  );
};
export default Sitters;
