import Modal from "../UI/Modal";

const Logout = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <h1>You have logged out.</h1>
    </Modal>
  );
};

export default Logout;
