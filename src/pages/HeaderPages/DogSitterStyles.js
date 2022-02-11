import styled from "styled-components";

const WrapDiv = styled.div`
  margin-top: 8em;
  margin-left: 18em;
`;

const CardStyled = styled.div`
  position: fixed;
  bottom: 40px;
  left: 20px;
  display: block;
  text-decoration: none;
  color: white;
  background-color: #c4bbc3;
  border: 1px solid #c4bbc3;
  padding: 10px 20px;
  border-radius: 5px;
  margin-left: 2em;
  width: 100%;
  max-width: 12em;
  height: 100%;
  max-height: 12em;
  text-align: center;
  & p {
    text-align: center;
    margin-top: 10px;
  }
  & button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    background-color: #9e939c;
    color: white;
    font-size: 15px;
    &:hover,
    &:active {
      font-weight: bold;
    }
  }
`;

const FilterDiv = styled.div`
  position: absolute;
  top: 9em;
  left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  background-color: none;
  border: none;
  padding: 10px 20px;
  margin-left: 2em;
  width: 100%;
  max-width: 12em;
  height: 100%;
  max-height: 12em;
  text-align: center;
`;

const ButtonStyled = styled.button`
  cursor: pointer;
  text-decoration: none;
  font-size: 17px;
  margin-left: 5px;
  margin-top: 6px;
  background-color: white;
  border: none;
  color: #695265;
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
export { WrapDiv, CardStyled, FilterDiv, ButtonStyled };
