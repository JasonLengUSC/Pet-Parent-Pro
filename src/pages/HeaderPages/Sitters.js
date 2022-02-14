import { useState } from "react";

import DogForm from "../../forms/DogForm";
import MainHeader from "../../components/UI/MainHeader";
import SitterFilter from "../../filters/SitterFilter";

import { Card, Row, Col, Avatar, Rate, Tag } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import { WrapDiv, CardStyled, FilterDiv } from "./DogSitterStyles";

const { Meta } = Card;

const ratingIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
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
    tag: "experienced",
  },
  {
    username: "TestSitter02",
    rating: 5,
    date: "2022/01/09",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "WA",
    tag: "experienced",
  },
  {
    username: "TestSitter03",
    rating: 4,
    date: "2022/01/05",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "VA",
    tag: "experienced",
  },
  {
    username: "TestSitter04",
    rating: 3,
    date: "2022/01/03",
    preferedSize: "Small: 0lbs - 15lbs",
    region: "FL",
    tag: "experienced",
  },
  {
    username: "TestSitter05",
    rating: 5,
    date: "2022/02/01",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "AZ",
    tag: "experienced",
  },
  {
    username: "TestSitter06",
    rating: 2,
    date: "2022/02/02",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "MN",
    tag: "experienced",
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
          {DUMMY_SITTERS.map((sitters, index) => {
            return (
              <Col key={"Sitter" + index} span={24}>
                <Card hoverable style={{ width: "98%", marginTop: 8 }}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={sitters.username}
                  />
                  <Tag color="lime">{sitters.tag}</Tag>
                  <Rate
                    style={{ "margin-bottom": "10px" }}
                    defaultValue={sitters.rating}
                    character={({ index }) => ratingIcons[index + 1]}
                    disabled
                  />

                  <p>Date: {sitters.date}</p>
                  <p>Prefered Size: {sitters.preferedSize}</p>
                  <p>Region: {sitters.region}</p>
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
