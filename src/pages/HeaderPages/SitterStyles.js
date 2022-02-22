import styled from "styled-components";

const BackDiv = styled.div`
  position: absolute;
  top: 5rem;
  left: 15px;
  background-color: #cfc8ce;
  border: 1px solid #cfc8ce;
  margin-left: 1em;
  width: 100%;
  max-width: 14em;
  height: 150%;
  @media (max-width: 1220px) {
    top: 8rem;
  }
`;

const SitterButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8em;
  right: 50px;
  text-decoration: none;
  color: white;
  background-color: #877283;
  border: 1px solid #877283;
  border-radius: 8px;
  width: 100%;
  max-width: 13em;
  height: 100%;
  max-height: 4em;
  font-weight: bold;
  &:hover,
  &:active {
    text-decoration: underline;
  }
  @media (max-width: 1220px) {
    top: 11rem;
  }
`;

const WrapDiv = styled.div`
  margin-top: 8em;
  margin-left: 18em;
  margin-right: 1em;
  @media (max-width: 1220px) {
    margin-top: 11rem;
  }
`;

export { BackDiv, SitterButton, WrapDiv };
