import { useParams } from "react-router-dom";

import { Rate, Tag } from "antd";

import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import { WrapFigure } from "./SitterDetailStyles";

const DUMMY_SITTERS = [
  {
    sitterId: "TestSitter01",
    rating: 4,
    date: "2022/01/04",
    preferedSize: "Small: 0lbs - 15lbs",
    region: "LA",
    tag: "Intermediate",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
  {
    sitterId: "TestSitter02",
    rating: 5,
    date: "2022/01/09",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "WA",
    tag: "Expert",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
  {
    sitterId: "TestSitter03",
    rating: 4,
    date: "2022/01/05",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "VA",
    tag: "Intermediate",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
  {
    sitterId: "TestSitter04",
    rating: 3,
    date: "2022/01/03",
    preferedSize: "Small: 0lbs - 15lbs",
    region: "FL",
    tag: "Beginner",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
  {
    sitterId: "TestSitter05",
    rating: 5,
    date: "2022/02/01",
    preferedSize: "Medium: 16lbs - 40lbs",
    region: "AZ",
    tag: "Expert",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
  {
    sitterId: "TestSitter06",
    rating: 2,
    date: "2022/02/02",
    preferedSize: "Large: 41lbs - 100lbs",
    region: "MN",
    tag: "Beginner",
    description:
      "Please let me know if your dog has any special needs. I’d also love to know about their personality so I can gauge how they will adapt to my home. I also require vet records and flea prevention treatment for your dog/s.",
  },
];

const ratingIcons = [
  <FrownOutlined />,
  <FrownOutlined />,
  <MehOutlined />,
  <SmileOutlined />,
  <SmileOutlined />,
];

const experienceColorMapping = {
  Beginner: "#c0c99b",
  Intermediate: "#e8ddba",
  Expert: "#c1d1d6",
};

const SitterDetail = () => {
  const params = useParams();

  const sitter = DUMMY_SITTERS.find(
    (sitter) => sitter.sitterId === params.sitterId
  );

  if (!sitter) {
    return <p>No such sitter found!</p>;
  }

  return (
    <WrapFigure>
      <h1>{sitter.sitterId}'s Detail </h1>
      <Tag
        style={{ marginLeft: "100px" }}
        color={experienceColorMapping[sitter.tag]}
      >
        {sitter.tag}
      </Tag>
      <Rate
        style={{ marginLeft: "60px", marginBottom: "18px" }}
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
  );
};
export default SitterDetail;
