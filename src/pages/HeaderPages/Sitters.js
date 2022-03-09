import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { DUMMY_SITTERS } from "../../datas/mockDatas/DummySitters";
import { DUMMY_USER_FOR_DOG_FORM_ON_SITTER_PAGE } from "../../datas/mockDatas/DummyUserInfo";

import DogForm from "../../components/Forms/DogForm";
import MainHeader from "../../components/UI/HeaderPlain";
import SitterFilter from "../../components/Filters/SitterFilter";
import SitterCard from "../../components/UI/SitterCard";

import { Row, Col } from "antd";

import { BackDiv, SitterButton, WrapDiv } from "./SitterStyles";

const breedList = [];

const Sitters = () => {
  const [breedOptions, setBreedOptions] = useState([]);

  useEffect(() => {
    fetchBreedListHandler();
  }, []);

  const fetchBreedListHandler = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        const breedJson = data.message;
        Object.keys(breedJson).forEach((key) => {
          const breedArray = breedJson[key];
          if (breedArray.length === 0) {
            breedList.push(key);
          } else {
            breedArray.forEach((subBreed) => {
              breedList.push(subBreed + " " + key);
            });
          }
        });
        console.log("Printing breedList: ", breedList);
        setBreedOptions(breedList);
      });
  };

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
          breedList={breedOptions}
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
