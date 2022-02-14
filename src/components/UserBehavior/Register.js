import { useState } from "react";

import Modal from "../UI/Modal";

import { Form, Input, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LockOutlined,
} from "@ant-design/icons";

import { SubmitButton } from "./RegisterStyles";
const layout = {
  wrapperCol: { offset: 4, span: 16 },
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
          rules={[
            {
              required: true,
              message: "Please enter your username!",
            },
          ]}
        >
          <Input
            placeholder="Enter your username here"
            prefix={<UserOutlined style={{ "marginRight": "10px" }} />}
            suffix={
              <Tooltip title="Username should no more than be 8 characters">
                <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
              </Tooltip>
            }
            onChange={changeUsernameHandler}
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input
            placeholder="Enter your email here"
            prefix={<MailOutlined style={{ "marginRight": "10px" }} />}
            onChange={changeEmailHandler}
          />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
          ]}
        >
          <Input
            placeholder="Enter your phone number here"
            prefix={<PhoneOutlined style={{ "marginRight": "10px" }} />}
            onChange={changePhoneNumHandler}
          />
        </Form.Item>
        <Form.Item
          name="region"
          rules={[
            {
              required: true,
              message: "Please enter your region!",
            },
          ]}
        >
          <Input
            placeholder="Enter your region here"
            prefix={<EnvironmentOutlined style={{ "marginRight": "10px" }} />}
            onChange={changeLocationHandler}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Enter your password here"
            prefix={<LockOutlined style={{ "marginRight": "10px" }} />}
            onChange={changePasswordHandler}
          />
        </Form.Item>
        <Form.Item
          name="confirmedPassword"
          rules={[
            {
              required: true,
              message: "Please comfirm your password!",
            },
          ]}
        >
          <Input.Password
            placeholder="Please comfirm your password"
            prefix={<LockOutlined style={{ "marginRight": "10px" }} />}
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
