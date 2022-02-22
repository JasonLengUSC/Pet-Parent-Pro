import { ratingIcons } from "../../datas/staticDatas/SitterRatingIcon";
import { experienceColorMapping } from "../../datas/staticDatas/ExperienceColorMapping";

import { Card, Avatar, Rate, Tag } from "antd";

const { Meta } = Card;

const SitterCard = (props) => {
  return (
    <Card hoverable style={{ width: "98%", marginTop: 8 }}>
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={props.sitterId}
      />
      <Tag color={experienceColorMapping[props.tag]}>{props.tag}</Tag>
      <Rate
        style={{ color: "#ffe4bd", marginLeft: "20px", marginBottom: "10px" }}
        defaultValue={props.rating}
        character={({ index }) => ratingIcons[index]}
        disabled
      />
      <p>Date: {props.date}</p>
      <p>Prefered Size: {props.preferedSize}</p>
      <p>Region: {props.region}</p>
    </Card>
  );
};

export default SitterCard;
