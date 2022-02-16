import styled from "styled-components";

const WrapFigure = styled.figure`
  background-color: #cfc8ce;
  color: white;
  border-radius: 10px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  padding-left: 5rem;
  padding-right: 5rem;
  margin: 8rem auto;
  width: 90%;
  max-width: 40rem;
  & h1 {
    font-size: 25px;
    font-weight: bold;
    color: white;
    margin-bottom: 20px;
    text-align: center;
  }
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
`;

export { WrapFigure };
