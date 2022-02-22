import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { DUMMY_SITTER_DETAILS } from "../../datas/mockDatas/DummySitterDetail";
import { ratingIcons } from "../../datas/staticDatas/SitterRatingIcon";
import { experienceColorMapping } from "../../datas/staticDatas/ExperienceColorMapping";

import { Rate, Tag } from "antd";

import {
  PageWrapper,
  BackArrow,
  HeadLine,
  WrapFigure,
} from "../HeaderPages/SitterDetailStyles";

const SitterDetail = () => {
  const params = useParams();

  const sitter = DUMMY_SITTER_DETAILS.find(
    (sitter) => sitter.sitterId === params.sitterId
  );
  if (!sitter) {
    return <p>No such sitter found!</p>;
  }

  return (
    <>
      <PageWrapper>
        <Link to={`/sitters`}>
          <BackArrow />
        </Link>
          <HeadLine>{sitter.sitterId}'s Detail </HeadLine>
        <WrapFigure>
          <Tag
            color={experienceColorMapping[sitter.tag]}
          >
            {sitter.tag}
          </Tag>
          <Rate
            style={{ color: "#ffe4bd", marginLeft: "60px", marginBottom: "50px" }}
            defaultValue={sitter.rating}
            character={({ index }) => ratingIcons[index]}
            disabled
          />
          <h2>Date:</h2>
          <h3>{sitter.date}</h3>
          <h2>Prefered Size: </h2>
          <h3>{sitter.preferedSize}</h3>
          <h2>Region:</h2>
          <h3>{sitter.region}</h3>
          <h2>Description: </h2>
          <p>{sitter.description}</p>
        </WrapFigure>
      </PageWrapper>
    </>
  );
};
export default SitterDetail;
