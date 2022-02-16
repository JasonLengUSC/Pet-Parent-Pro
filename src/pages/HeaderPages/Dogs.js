import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SitterForm from "../../forms/SitterForm";
import MainHeader from "../../components/UI/MainHeader";
import DogFilter from "../../filters/DogFilter";

import { Card, Row, Col, Image } from "antd";

import { FilterOutlined } from "@ant-design/icons";

import { WrapDiv, CardStyled, FilterDiv } from "./DogSitterStyles";

const userInfo = {
  username: "TestSitter01",
  rating: 4,
};

const DUMMY_DOGS = [
  {
    dogId: "Milo",
    username: "TestDogParent01",
    date: "2022/01/04",
    breed: "Husky",
    region: "LA",
  },
  {
    dogId: "Ollie",
    username: "TestDogParent02",
    date: "2022/01/09",
    breed: "Husky",
    region: "WA",
  },
  {
    dogId: "Leo",
    username: "TestDogParent03",
    date: "2022/01/05",
    breed: "Husky",
    region: "VA",
  },
  {
    dogId: "Blue",
    username: "TestDogParent04",
    date: "2022/01/03",
    breed: "Husky",
    region: "FL",
  },
  {
    dogId: "Loki",
    username: "TestDogParent05",
    date: "2022/02/01",
    breed: "Husky",
    region: "AZ",
  },
  {
    dogId: "Cookie",
    username: "TestDogParent06",
    date: "2022/02/02",
    breed: "Husky",
    region: "MN",
  },
  {
    dogId: "Cooper",
    username: "TestDogParent07",
    date: "2022/02/04",
    breed: "Husky",
    region: "WA",
  },
  {
    dogId: "Bella",
    username: "TestDogParent08",
    date: "2022/01/31",
    breed: "Husky",
    region: "LA",
  },
];

const Dogs = () => {
  useEffect(() => {
    fetchDogImageHandler();
  }, []);

  const [dogImages, setDogImages] = useState([]);

  const fetchDogImageHandler = () => {
    fetch("https://dog.ceo/api/breed/husky/images/random/8")
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
      <WrapDiv>
        <FilterDiv>
          <FilterOutlined
            style={{ float: "left", fontSize: "20px", color: "white" }}
          />
          <DogFilter />
        </FilterDiv>
        <CardStyled>
          <button onClick={showSitterFormHandler}>Become a Sitter</button>
          {showSitterForm && (
            <SitterForm userInfo={userInfo} onClose={hideSitterFormHandler} />
          )}
        </CardStyled>
        <Row gutter={[8, 16]}>
          {dogImages.map((imgLink, index) => {
            const dog = DUMMY_DOGS[index];
            return (
              <Col key={"dogCard" + index} span={24 / 4}>
                <Card
                  hoverable
                  style={{ width: 300, marginTop: 8 }}
                  cover={
                    // <img alt="dogImg" src={imgLink} />
                    <Image width={300} height={300} src={imgLink} />
                  }
                >
                  <p>Name: {dog.dogId}</p>
                  <p>Parent: {dog.username}</p>
                  <p>Date: {dog.date}</p>
                  <p>Breed: {dog.breed}</p>
                  <p>Region: {dog.region}</p>
                  <Link
                    style={{ fontSize: "15px", color: "#877283" }}
                    to={`/dogs/${dog.dogId}`}
                  >
                    More...
                  </Link>
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
