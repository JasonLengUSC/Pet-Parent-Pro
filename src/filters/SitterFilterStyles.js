import styled from "styled-components";

const WrapDiv = styled.div`
  position: fixed;
  top: 15rem;
  left: 20px;
  display: block;
  text-decoration: none;
  color: white;
  padding: 10px 20px;
  width: 100%;
  max-width: 14em;
  text-align: center;
  & h3 {
    font-weight: bold;
    color: white;
    margin-left: 5px;
  }
  & p {
    font-size: 15px;
    color: white;
    text-align: left;
    margin-left: 50px;
  }
`;

export { WrapDiv };
