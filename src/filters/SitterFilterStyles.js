import styled from "styled-components";

const WrapDiv = styled.div`
  position: fixed;
  top: 12rem;
  left: 20px;
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 30px;
  width: 100%;
  max-width: 14em;
  text-align: left;
  & h3 {
    font-weight: bold;
    color: white;
    margin-left: 5px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  @media (max-width: 1220px) {
    top: 19rem;
    font-size: smaller;
  }
`;

export { WrapDiv };
