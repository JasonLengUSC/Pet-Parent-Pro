import styled from "styled-components";
import { Card } from "antd";

const DogCardStyled = styled(Card)`
  background-color: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  backdrop-filter: blur(5px);
  & p {
    color: #615e60;
  }
`;

export { DogCardStyled };
