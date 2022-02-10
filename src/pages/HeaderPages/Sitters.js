import { useState } from "react";
import DogForm from "../../forms/DogForm";

import { WrapDiv, CardStyled } from "./DogSitterStyles";

const userInfo = {
  username: "TestUser01",
  rating: 5,
};

const Sitters = () => {
  const [showDogForm, setShowDogForm] = useState(false);

  const showDogFormHanlder = () => {
    setShowDogForm(true);
  };

  const hideDogFormHanlder = () => {
    setShowDogForm(false);
  };

  return (
    <WrapDiv>
      <CardStyled>
        <p>Didn't find the sitter you want? </p>
        <p>Post your own info!</p>
        <button onClick={showDogFormHanlder}>Fill out My Info</button>
        {showDogForm && (
          <DogForm userInfo={userInfo} onClose={hideDogFormHanlder} />
        )}
      </CardStyled>
    </WrapDiv>
  );
};

export default Sitters;
