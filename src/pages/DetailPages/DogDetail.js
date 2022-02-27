import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { DUMMY_DOG_DETAILS } from "../../datas/mockDatas/DummyDogDetail";
import detailDogImage from "../../assets/dummy-dog-detail-image.jpg";

import DogContactInfo from "../../components/UserBehavior/DogContactInfo";

import { Carousel } from "antd";

import { PageWrapper, BackArrow, HeadLine, WrapFigure } from "../DetailPages/DogDetailStyles";

const iamgeStyle = {
  height: "400px",
  textAlign: "center",
};

const DogDetail = () => {
  const params = useParams();

  const dog = DUMMY_DOG_DETAILS.find((dog) => dog.dogId === params.dogId);
  if (!dog) {
    return <p>No such dog found!</p>;
  }

  return (
    <>
      <PageWrapper>
      <Link to={`/dogs`}>
        <BackArrow />
        </Link>
        <HeadLine>{dog.dogId}'s Detail </HeadLine>
        <WrapFigure>
          <Carousel autoplay>
            <img style={iamgeStyle} src={detailDogImage} alt="dogImage1" />
            <img style={iamgeStyle} src={detailDogImage} alt="dogImage2" />
            <img style={iamgeStyle} src={detailDogImage} alt="dogImage3" />
          </Carousel>
          <h2>Parent:</h2>
          <h3>{dog.parentId}</h3>
          <h2>Date:</h2>
          <h3>{dog.date}</h3>
          <h2>Breed: </h2>
          <h3>{dog.breed}</h3>
          <h2>Region:</h2>
          <h3>{dog.region}</h3>
          <h2>Description: </h2>
          <p>{dog.description}</p>
          <DogContactInfo parentId={dog.parentId} />

        </WrapFigure>
      </PageWrapper>
    </>
  );
};
export default DogDetail;
