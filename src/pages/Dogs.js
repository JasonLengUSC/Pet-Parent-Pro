import { React, Fragment } from "react";
import { useState } from "react/cjs/react.development";
import SitterForm from "../components/SitterForm/SitterForm";

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
    <Fragment>
      <h1>The Dogs page</h1>
      <p>Can't find the dog you want? Post your own info!</p>
      <button onClick={toggleSitterForm}>{showSitterForm ? "Close Form" : "Open Form"}</button>
      {showSitterForm ? <SitterForm
        userInfo={userInfo}
      /> : <></>
      }
    </Fragment>
  );
};

export default Dogs;