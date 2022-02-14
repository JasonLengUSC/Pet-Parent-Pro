import { useState } from "react";

import DogForm from "../../forms/DogForm";
import MainHeader from "../../components/UI/MainHeader";
import SitterFilter from "../../filters/SitterFilter";

import { Card, Row, Col, Avatar, Rate, Tag } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import { WrapDiv, CardStyled, FilterDiv } from "./DogSitterStyles";

const { Meta } = Card;

const ratingIcons = [
  <FrownOutlined />,
  <FrownOutlined />,
  <MehOutlined />,
  <SmileOutlined />,
  <SmileOutlined />,
];

const experienceColorMapping = {
  Beginner: "orange",
  Intermediate: "lime",
  Expert: "purple",
};

const userInfo = {
  username: "TestPetParent01",
};

const DUMMY_SITTERS = [
  {
    username: "TestSitter01",
    rating: 4,
    date: "2022/01/04",
    preferedSize: "Small: 0lbs - 15lbs",
    region: "LA",
    tag: "Intermediate",
  },
  {
    username: "TestSitter02",
    rating: 5,
    date: "2022/01/09",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "WA",
    tag: "Expert",
  },
  {
    username: "TestSitter03",
    rating: 4,
    date: "2022/01/05",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "VA",
    tag: "Intermediate",
  },
  {
    username: "TestSitter04",
    rating: 3,
    date: "2022/01/03",
    preferedSize: "Small: 0lbs - 15lbs",
    region: "FL",
    tag: "Beginner",
  },
  {
    username: "TestSitter05",
    rating: 5,
    date: "2022/02/01",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "AZ",
    tag: "Expert",
  },
  {
    username: "TestSitter06",
    rating: 2,
    date: "2022/02/02",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "MN",
    tag: "Beginner",
  },
];

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
      <WrapDiv>
        <FilterDiv>
          <FilterOutlined
            style={{ float: "left", fontSize: "20px", color: "white" }}
          />
          <SitterFilter />
        </FilterDiv>
        <CardStyled>
          <button onClick={showDogFormHandler}>Post Dog's Info</button>
          {showDogForm && (
            <DogForm userInfo={userInfo} onClose={hideDogFormHandler} />
          )}
        </CardStyled>
        <Row>
          {DUMMY_SITTERS.map((sitter, index) => {
            return (
              <Col key={"Sitter" + index} span={24}>
                <Card hoverable style={{ width: "98%", marginTop: 8 }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={sitter.username}
                  />
                  <Tag color={experienceColorMapping[sitter.tag]}>
                    {sitter.tag}
                  </Tag>
                  <Rate
                    style={{ "marginBottom": "10px" }}
                    defaultValue={sitter.rating}
                    character={({ index }) => ratingIcons[index]}
                    disabled
                  />
                  <p>Date: {sitter.date}</p>
                  <p>Prefered Size: {sitter.preferedSize}</p>
                  <p>Region: {sitter.region}</p>
                </Card>
              </Col>
            );
          })}
        </Row>
      </WrapDiv>
    </>
  );
};
export default Sitters;
