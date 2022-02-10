import reactDom from "react-dom";
import { BackdropStyled, ModalStyled } from "./ModalStyles";

const Backdrop = (props) => {
  return <BackdropStyled onClick={props.onClose} />;
};

const ModalOverlay = (props) => {
  return (
    <ModalStyled>
      <div>{props.children}</div>
    </ModalStyled>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {

  return (
    <>
      {reactDom.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {reactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
