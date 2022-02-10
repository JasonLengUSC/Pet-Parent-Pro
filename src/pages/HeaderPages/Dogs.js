import { useEffect, useState } from "react";
import SitterForm from "../../forms/SitterForm";
import { Card, Row, Col, Image } from "antd";

import { WrapDiv, CardStyled } from "./DogSitterStyles";

const userInfo = {
  username: "TestUser01",
  rating: 5,
};

const Dogs = () => {
  useEffect(() => {
    fetchDogImageHandler();
  }, []);

  const [showSitterForm, setShowSitterForm] = useState(false);
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

  const showSitterFormHanlder = () => {
    setShowSitterForm(true);
  };

  const hideSitterFormHanlder = () => {
    setShowSitterForm(false);
  };

  return (
    <WrapDiv>
      <CardStyled>
        <p>Cannot find the dog you want here? </p>
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
  );
};

export default Dogs;
