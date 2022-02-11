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
  margin-left: 1em;
  &:hover,
  &:active {
    color: white;
    background: #695265;
    border-color: #695265;
  }
`;



export { SubmitButton };
