import styled from "styled-components";
import { LeftOutlined } from "@ant-design/icons";

const PageBody = styled.body`
  min-height: 100vh;
  background-color: #cfc8ce;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BackArrow = styled(LeftOutlined)`
  position: fixed;
  top: 2em;
  left: 1em;
  font-size: 200px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: bold;
`;
const HeadLine = styled.h1`
  position: absolute;
  top: 150px;
  right: 3em;
  font-size: 130px;
  color: rgba(255, 255, 255, 0.5);
  z-index: 1;
`;

const WrapFigure = styled.figure`
  position: relative;
  width: 100%;
  max-width: 50rem;
  padding-top: 15rem;
  padding-bottom: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  margin: 8rem auto;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  backdrop-filter: blur(5px);
  & h2 {
    font-style: italic;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    color: white;
  }
  & h3 {
    font-size: 16px;
    color: white;
    text-align: right;
  }
  & p {
    font-size: 15px;
    color: white;
    text-align: left;
  }
  & img {
    margin-bottom: 25px;
    border-radius: 10px;
  }
`;

export { PageBody, BackArrow, HeadLine, WrapFigure };
