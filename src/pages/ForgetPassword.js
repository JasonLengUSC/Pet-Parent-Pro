import { useState } from "react";

import {
  ResetSec,
  InputDiv,
  SubmitButton,
  BlankDiv,
} from "./ForgetPasswordStyles";

const ForgetPassword = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const changeNewPasswordHandler = (event) => {
    setNewPassword(event.target.value);
  };

  const changeConfirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      username,
      email,
      newPassword,
    };

    if (newPassword === confirmedPassword) {
      console.log("Submitted data: ");
      console.log(formData);
    } else if (newPassword !== confirmedPassword) {
      console.log("Passwords don't match.");
    }
  };

  return (
    <>
      <ResetSec>
        <h1>Reset Password</h1>
        <InputDiv>
          <label htmlFor="username">UserName</label>
          <input
            type="username"
            id="username"
            required
            onChange={changeUsernameHandler}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            onChange={changeEmailHandler}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={changeNewPasswordHandler}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="confirmedPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmedPassword"
            required
            onChange={changeConfirmedPasswordHandler}
          />
        </InputDiv>
        <SubmitButton onClick={submitHandler}>Reset</SubmitButton>
      </ResetSec>
      <BlankDiv />
    </>
  );
};

export default ForgetPassword;
