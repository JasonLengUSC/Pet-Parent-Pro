import styled, { keyframes } from "styled-components";

const BackdropStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const SlideDown = keyframes`
 from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ModalStyled = styled.div`
  position: fixed;
  top: 15vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 3rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${SlideDown} 300ms ease-out forwards;
  & h1 {
    font-size: 23px;
    color: #887485;
    text-align: center;
    margin-bottom: 1em;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;

export { BackdropStyled, ModalStyled };
