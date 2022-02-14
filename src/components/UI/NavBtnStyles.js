import styled from "styled-components";

const ButtonStyled = styled.button`
  position: relative;
  height: 100%;
  max-height: 3rem;
  font: inherit;
  font-weight: bold;
  font-size: 15px;
  background: #877283;
  border: solid #877283;
  color: white;
  margin-right: 1em;
  cursor: pointer;
  &:hover,
  &:active {
    text-decoration: underline;
    text-underline-offset: 0.5em;
  }
  & a:hover,
  & a:visited,
  & a:link,
  & a:active {
    text-decoration: none;
    color: white;
  }
`;
export { ButtonStyled };
