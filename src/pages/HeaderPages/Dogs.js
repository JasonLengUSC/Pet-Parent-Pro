import { useEffect, useState } from "react";
import SitterForm from "../../forms/SitterForm";
import { Card, Row, Col } from 'antd';
const { Meta } = Card;

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
    fetch("https://dog.ceo/api/breed/husky/images/random/9").then((response) => {
      return response.json();
    }).then((data) => {
      setDogImages(data.message);
    });
  };

  const toggleSitterForm = () => {
    const newStatus = !showSitterForm;
    setShowSitterForm(newStatus);
  };

  return (
    <>
      <h1>The Dogs page</h1>
      <p>Didn't find the dog you want? Post your own info!</p>
      <button onClick={toggleSitterForm}>
        {showSitterForm ? "Close Form" : "Open Form"}
      </button>
      {showSitterForm ? <SitterForm userInfo={userInfo} /> : <></>}
      <Row>
        {dogImages.map((imgLink, index) => {
          return (
            <Col key={"dogCard" + index} span={24 / 3}>
              <Card
                hoverable
                title={"Dog Post " + index}
                style={{ width: 480 }}
                cover={
                  <img alt="dogImg" src={imgLink} />
                }
              >
                <p>Username: TestUser {index}</p>
                <p>Date: xxxx/xx/xx</p>
                <p>Breed: Husky</p>
                <p>Location: Seattle</p>
                <p>Rate: 5/5</p>
              </Card>
            </Col>
          )
        })}
      </Row>
    </>
  );
};

export default Dogs;
