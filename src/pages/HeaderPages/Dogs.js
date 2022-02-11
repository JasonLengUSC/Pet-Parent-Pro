import { useEffect, useState } from "react";

import SitterForm from "../../forms/SitterForm";
import MainHeader from "../../components/UI/MainHeader";
import DogFilter from "../../filters/DogFilter";

import { Card, Row, Col, Image } from "antd";

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

const Dogs = () => {
  useEffect(() => {
    fetchDogImageHandler();
  }, []);

  const [dogImages, setDogImages] = useState([]);

  const fetchDogImageHandler = () => {
    fetch("https://dog.ceo/api/breed/husky/images/random/10")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDogImages(data.message);
      });
  };

  const [showSitterForm, setShowSitterForm] = useState(false);
  const [showFilterDrawer, setshowFilterDrawer] = useState(false);

  const showSitterFormHanlder = () => {
    setShowSitterForm(true);
  };
  const hideSitterFormHanlder = () => {
    setShowSitterForm(false);
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
            <DogFilter visible={showFilterDrawer} onClose={hideDrawerHandler} />
          )}
        </FilterDiv>
        <CardStyled>
          <p>Didn't find the dog you want? </p>
          <p>Post your own info!</p>
          <button onClick={showSitterFormHanlder}>Fill Out My Info</button>
          {showSitterForm && (
            <SitterForm userInfo={userInfo} onClose={hideSitterFormHanlder} />
          )}
        </CardStyled>
        <Row gutter={[16, 16]}>
          {dogImages.map((imgLink, index) => {
            return (
              <Col key={"dogCard" + index} span={24 / 5}>
                <Card
                  hoverable
                  title={"Dog Post " + index}
                  style={{ width: 300 }}
                  cover={
                    // <img alt="dogImg" src={imgLink} />
                    <Image width={300} height={300} src={imgLink} />
                  }
                >
                  <p>Username: TestUser {index}</p>
                  <p>Date: xxxx/xx/xx</p>
                  <p>Breed: Husky</p>
                  <p>Location: Seattle</p>
                  <p>Rate: 5/5</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </WrapDiv>
    </>
  );
};

export default Dogs;
