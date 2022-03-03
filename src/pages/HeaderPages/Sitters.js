import { useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_SITTERS } from "../../datas/mockDatas/DummySitters";
import { DUMMY_USER_FOR_DOG_FORM_ON_SITTER_PAGE } from "../../datas/mockDatas/DummyUserInfo";

import DogForm from "../../components/Forms/DogForm";
import MainHeader from "../../components/UI/HeaderPlain";
import SitterFilter from "../../components/Filters/SitterFilter";
import SitterCard from "../../components/UI/SitterCard";

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
