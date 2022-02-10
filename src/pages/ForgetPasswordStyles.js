import styled from "styled-components";

const ResetSec = styled.section`
  margin: auto;
  width: 100%;
  max-width: 40rem;
  border-radius: 6px;
  background-color: #796074;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  text-align: center;
  & h1 {
    text-align: center;
    color: white;
    font-weight: bold;
    margin-bottom: 0.8em;
    font-size: 28px;
  }
`;

const InputDiv = styled.div`
  margin-bottom: 0.5rem;
  & label {
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  & input {
    font: inherit;
    background-color: #f3f3f3;
    color: #695265;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
`;

const SubmitButton = styled.button`
  cursor: pointer;
  font: inherit;
  font-weight: bold;
  color: white;
  background-color: #887485;
  border: 1px solid #887485;
  border-radius: 4px;
  padding: 0.5rem 2.5rem;
  margin-top: 1rem;
  & hover {
    background-color: #695265;
    border-color: #695265;
  }
`;

const BlankDiv = styled.div`
  height: 100px;
`;

export { ResetSec, InputDiv, SubmitButton, BlankDiv };
