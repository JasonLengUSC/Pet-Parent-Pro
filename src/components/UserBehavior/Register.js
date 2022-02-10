import { useState } from "react";

import Modal from "../UI/Modal";

import { Form, Input } from "antd";
import { SubmitButton } from "./RegisterStyles";

const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 14 },
};
const tailLayout = {
  wrapperCol: { offset: 7, span: 14 },
};

const Register = (props) => {
  const [form] = Form.useForm();

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
    } else if (
      password !== confirmedPassword &&
      username.length < userNameMaxLength
    ) {
      console.log("Passwords don't match.");
    } else if (
      password === confirmedPassword &&
      username.length >= userNameMaxLength
    ) {
      console.log("Invalid username.");
    } else if (
      password !== confirmedPassword &&
      username.length >= userNameMaxLength
    ) {
      console.log("Invalid username & password.");
    }
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Sign Up</h1>
      <Form {...layout} form={form} onFinish={submitHandler}>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            placeholder="Enter your username here."
            onChange={changeUsernameHandler}
          />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email here."
            onChange={changeEmailHandler}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Phone Number"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number here."
            onChange={changePhoneNumHandler}
          />
        </Form.Item>
        <Form.Item
          name="location"
          label="Region"
          rules={[
            {
              required: true,
              message: "Please enter your region!",
            },
          ]}
        >
          <Input
            placeholder="Enter your region here."
            onChange={changeLocationHandler}
          />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your password here."
            onChange={changePasswordHandler}
          />
        </Form.Item>
        <Form.Item
          name="confirmedPassword"
          label="Comfirm Password"
          rules={[
            {
              required: true,
              message: "Please comfirm your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your password again."
            onChange={changeConfirmedPasswordHandler}
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <SubmitButton htmlType="submit">Create Account</SubmitButton>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Register;
