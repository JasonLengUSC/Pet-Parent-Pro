import styled from "styled-components";

const BackDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(#877283, #cfc8ce);
  clip-path: circle(25% at left 55%);
`;

const DogButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8em;
  right: 30px;
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

const CircleDiv = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #cfc8ce;
  clip-path: circle(40% at right 120%);
`;

const WrapDiv = styled.div`
  margin-top: 8em;
  margin-left: 18em;
  margin-right: 2em;
  @media (max-width: 1220px) {
    top: 11rem;
  }
`;

export { BackDiv, DogButton, CircleDiv, WrapDiv };
