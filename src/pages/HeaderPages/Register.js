import { useState } from "react";

import { SignUpSec, InputDiv, SubmitButton, BlankDiv } from "./RegisterStyles";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changePhoneNumHandler = (event) => {
    setPhoneNum(event.target.value);
  };
  const changeLocationHandler = (event) => {
    setLocation(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };
  const changeConfirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      username,
      email,
      phoneNum,
      location,
      password,
      confirmedPassword,
    };
    console.log(password);
    console.log(confirmedPassword);

    const userNameMaxLength = 8;

    if (password === confirmedPassword && username.length < userNameMaxLength) {
      console.log("Submitted data: ");
      console.log(formData);
    } else if (password !== confirmedPassword && username.length < userNameMaxLength) {
      console.log("Passwords don't match.");
    } else if (password === confirmedPassword && username.length >= userNameMaxLength) {
      console.log("Invalid username.");
    } else if (password !== confirmedPassword && username.length >= userNameMaxLength) {
      console.log("Invalid username & password.");
    }
  };

  return (
    <>
      <SignUpSec>
        <h1>Sign Up</h1>
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
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="phoneNumber"
            id="phoneNumber"
            required
            onChange={changePhoneNumHandler}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="location">Location/Region</label>
          <input
            type="location"
            id="location"
            required
            onChange={changeLocationHandler}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            required
            onChange={changePasswordHandler}
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
        <SubmitButton onClick={submitHandler}>Create Account</SubmitButton>
      </SignUpSec>
      <BlankDiv />
    </>
  );
};

export default Register;
