import styled from "styled-components";

const WrapDiv = styled.div`
  position: fixed;
  top: 20rem;
  left: 10px;
  display: block;
  text-decoration: none;
  padding: 5px 10px;
  width: 100%;
  max-width: 14em;
  text-align: left;
  & h3 {
    font-weight: bold;
    color: white;
    margin-left: 5px;
    margin-top: 40px;
    margin-bottom: 15px;
  }
  @media (max-width: 1220px) {
    top: 25rem;
    left: 2px;
    font-size: smaller;
  }
`;

export { WrapDiv };
