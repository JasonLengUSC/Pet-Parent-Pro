import styled from "styled-components";

const WrapDiv = styled.div`
  margin-left: 18em;
`;

const CardStyled = styled.div`
  position: fixed;
  bottom: 40px;
  left: 20px;
  display: block;
  text-decoration: none;
  color: #333;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 2em;
  width: 100%;
  max-width: 12em;
  height: 100%;
  max-height: 12em;
  text-align: center;
  &:p {
    text-align: center;
  }
`;

export { WrapDiv, CardStyled };
