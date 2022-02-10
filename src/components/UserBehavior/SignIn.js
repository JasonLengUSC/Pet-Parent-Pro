import { useState } from "react";
import Modal from "../UI/Modal";

import { Form, Input } from "antd";

import { SubmitButton, LinkStyled } from "./SignInStyles";

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 6, span: 16 },
};

const Login = (props) => {
  const [form] = Form.useForm();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changePasswordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = {
      username,
      password,
    };
    console.log("Submitted data: ");
    console.log(formData);
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Sign In</h1>
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
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input
            placeholder="Enter your password here."
            onChange={changePasswordHandler}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <SubmitButton htmlType="submit">Login to Your account</SubmitButton>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <LinkStyled>
            <a href="/forgetPassword">Forget Password?</a>
          </LinkStyled>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Login;
