import { Image } from "antd";

import {DogCardStyled} from './DogCardStyles';

const DogCard = (props) => {
  return (
    <DogCardStyled
      hoverable
      style={{ marginTop: 8 }}
      cover={<Image height={300} src={props.img} preview={false} />}
    >
      <p>Name: {props.dogId}</p>
      <p>Parent: {props.username}</p>
      <p>Date: {props.date}</p>
      <p>Breed: {props.breed}</p>
      <p>Region: {props.region}</p>
    </DogCardStyled>
  );
};

export default DogCard;
