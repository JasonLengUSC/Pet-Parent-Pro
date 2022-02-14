import styled from "styled-components";

const WrapDiv = styled.div`
  margin-top: 8em;
  margin-left: 18em;
`;

const CardStyled = styled.div`
  position: absolute;
  top: 8em;
  right: 34px;
  display: block;
  text-decoration: none;
  color: white;
  background-color: #877283;
  border: 1px solid #877283;
  padding: 10px 20px;
  border-radius: 8px;
  margin-left: 2em;
  width: 100%;
  max-width: 13em;
  height: 100%;
  max-height: 4em;
  text-align: center;
  & button {
    cursor: pointer;
    margin-top: 3px;
    font-weight: bold;
    border: none;
    background-color: #877283;
    color: white;
    font-size: 15px;
    &:hover,
    &:active {
      text-decoration: underline;
    }
  }
  @media (max-width: 1220px) {
    top: 12em;
  }
`;

const FilterDiv = styled.div`
  position: fixed;
  top: 14em;
  left: 15px;
  display: block;
  text-decoration: none;
  color: white;
  background-color: #cfc8ce;
  border: 1px solid #cfc8ce;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 1em;
  width: 100%;
  max-width: 14em;
  height: 100%;
  max-height: 52em;
  text-align: center;
  & p {
    font-size: 17px;
    color: #695265;
    text-align: left;
    margin-left: 40px;
  }
  @media (max-width: 1220px) {
    top: 17em;
    height: 49em;
  }
`;

export { WrapDiv, CardStyled, FilterDiv};
