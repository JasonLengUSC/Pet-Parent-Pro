import styled from "styled-components";

const WrapDiv = styled.div`
  position: fixed;
  top: 25rem;
  left: 20px;
  display: block;
  text-decoration: none;
  padding: 10px 20px;
  width: 100%;
  max-width: 14em;
  text-align: center;
  & h3 {
    font-weight: bold;
    color: #e3e3e3;
    margin-left: 5px;
  }
  & p {
    font-size: 15px;
    color: #e3e3e3;
    text-align: left;
    margin-left: 50px;
  }
  @media (max-width: 1220px) {
    left:2px;
    font-size: smaller;
  }
`;

export { WrapDiv };
