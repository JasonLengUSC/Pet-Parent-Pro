import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DUMMY_DOGS } from "../../datas/mockDatas/DummyDogs";
import { DUMMY_USER_FOR_SITTER_FORM_ON_DOG_PAGE } from "../../datas/mockDatas/DummyUserInfo";

import SitterForm from "../../components/Forms/SitterForm";
import MainHeader from "../../components/UI/HeaderPlain";
import DogFilter from "../../components/Filters/DogFilter";
import DogCard from "../../components/UI/DogCard";

import { Row, Col } from "antd";

import { BackDiv, DogButton, CircleDiv, WrapDiv } from "./DogStyles";

const Dogs = () => {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetchDogImageHandler();
  }, []);

  const dogNum = 12;
  const fetchDogImageHandler = () => {
    fetch(`https://dog.ceo/api/breed/husky/images/random/${dogNum}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogImages(data.message);
      });
  };

  const [showSitterForm, setShowSitterForm] = useState(false);

  const showSitterFormHandler = () => {
    setShowSitterForm(true);
  };
  const hideSitterFormHandler = () => {
    setShowSitterForm(false);
  };

  return (
    <>
      <MainHeader />
      <BackDiv />
      <DogFilter />
      <DogButton onClick={showSitterFormHandler}>Become a Sitter</DogButton>
      {showSitterForm && (
        <SitterForm
          userInfo={DUMMY_USER_FOR_SITTER_FORM_ON_DOG_PAGE}
          onClose={hideSitterFormHandler}
        />
      )}
      <CircleDiv />
      <WrapDiv>
        <Row gutter={[25, 25]}>
          {dogImages.map((imgLink, index) => {
            const dog = DUMMY_DOGS[index % DUMMY_DOGS.length];
            return (
              <Col key={"dogCard" + index} span={24 / 4}>
                <Link to={`/dogs/${dog.dogId}`}>
                  <DogCard
                    dogId={dog.dogId}
                    username={dog.username}
                    date={dog.date}
                    breed={dog.breed}
                    region={dog.region}
                    img={dogImages[index]}
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

export default Dogs;
