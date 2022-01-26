import { useState } from "react";
import SitterForm from "../../forms/SitterForm";

const userInfo = {
  username: "TestUser01",
  rating: 5,
};

const Dogs = () => {
  const [showSitterForm, setShowSitterForm] = useState(false);

  const toggleSitterForm = () => {
    const newStatus = !showSitterForm;
    setShowSitterForm(newStatus);
  };
  return (
    <>
      <h1>The Dogs page</h1>
      <p>Didn't find the dog you want? Post your own info!</p>
      <button onClick={toggleSitterForm}>
        {showSitterForm ? "Close Form" : "Open Form"}
      </button>
      {showSitterForm ? <SitterForm userInfo={userInfo} /> : <></>}
    </>
  );
};

export default Dogs;
