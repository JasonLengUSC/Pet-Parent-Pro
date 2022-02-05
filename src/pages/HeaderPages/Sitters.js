import { useState } from "react";
import DogForm from "../../forms/DogForm";

const userInfo = {
  username: "TestUser01",
  rating: 5,
};

const Sitters = () => {
  const [showDogForm, setShowDogForm] = useState(false);

  const toggleDogForm = () => {
    const newStatus = !showDogForm;
    setShowDogForm(newStatus);
  };

  return (
    <>
      <h1>The Sitters page</h1>
      <p>Didn't find the sitter you want? Post your own info!</p>
      <button onClick={toggleDogForm}>
        {showDogForm ? "Close Form" : "Open Form"}
      </button>
      {showDogForm ? <DogForm userInfo={userInfo} /> : <></>}
    </>
  );
};

export default Sitters;
