import styled from "styled-components";

const SubmitButton = styled.button`
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  background-color: #887485;
  border: 1px solid #887485;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;
  color: white;
  margin-top: 1em;
  margin-right: 2em;
  cursor: pointer;
  &:hover,
  &:active {
    color: white;
    background: #695265;
    border-color: #695265;
  }
`;
const ButtonStyled = styled.button`
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  background: #b0b3b8;
  border: solid #b0b3b8;
  border-radius: 4px;
  color: white;
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
