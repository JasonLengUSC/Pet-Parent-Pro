import styled from "styled-components";

const SubmitButton = styled.button`
  width: 100%;
  max-width: 6em;
  font: inherit;
  background: #887485;
  border: solid #887485;
  color: white;
  margin-top: 1em;
  margin-right: 2em;
  cursor: pointer;
  &:hover,
  &:active {
    background: #695265;
    border-color: #695265;
  }
`;
const ButtonStyled = styled.button`
  width: 100%;
  max-width: 6em;
  font: inherit;
  background: #b0b3b8;
  border: solid #b0b3b8;
  color: black;
  margin-top: 1em;
  margin-right: 2em;
  cursor: pointer;
  &:hover,
  &:active {
    background: #9b9ea3;
    border: solid #9b9ea3;
  }
`;
export { SubmitButton, ButtonStyled };
