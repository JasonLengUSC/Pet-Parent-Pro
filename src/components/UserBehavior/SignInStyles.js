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
  margin-left: 2em;
  &:hover,
  &:active {
    color: white;
    font-weight: bold;
    background: #695265;
    border-color: #695265;
  }
`;

const LinkStyled = styled.div`
  margin-left: 6em;
  & a {
    color: #887485;
  }
  & a:link {
    color: #887485;
  }
  & a:hover,
  & a:active {
    color: #887485;
    text-decoration: underline;
  }
`;

export { SubmitButton, LinkStyled };
