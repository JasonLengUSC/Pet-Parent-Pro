import { useState } from "react";
import moment from "moment";

import Modal from "../UI/Modal";

import { Form, Input, Select, Rate, DatePicker } from "antd";
import {
  UserOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

import { SubmitButton, ButtonStyled } from "./FormButtonStyles";

const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const ratingIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const layout = {
  wrapperCol: { offset: 4, span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 15 },
};

const SitterForm = (props) => {
  const [form] = Form.useForm();
  const currentdate = new Date();
  const timeString = currentdate.toLocaleString();
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("any");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState([moment(), moment()]);

  const changeLocationHandler = (e) => {
    setLocation(e.target.value);
  };
  const changeDateRangeHandler = (dates) => {
    if (dates) {
      setDateRange([...dates]);
    }
  };
  const changeSizeHandler = (value) => {
    setSize(value);
  };
  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitSitterForm = () => {
    const formData = {
      name: props.userInfo.username,
      rating: props.userInfo.rating,
      time: timeString,
      location,
      size,
      description,
      dateRange,
    };
    console.log("Submitted data: ");
    console.log(formData);
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <Modal onClose={props.onClose}>
      <h1>Providing Service as Sitter</h1>
      <Form {...layout} form={form} onFinish={submitSitterForm}>
        <Form.Item name="username" initialValue={props.userInfo.username}>
          <Input
            prefix={<UserOutlined style={{ "marginRight": "10px" }} />}
            disabled
          />
        </Form.Item>
        <Form.Item name="date" initialValue={timeString}>
          <Input
            prefix={<FieldTimeOutlined style={{ "marginRight": "10px" }} />}
            disabled
          />
        </Form.Item>
        <Form.Item name="rating" initialValue={props.userInfo.rating}>
          <Rate character={({ index }) => ratingIcons[index + 1]} disabled />
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
          name="dateRange"
          rules={[
            {
              required: true,
              message: "Please select a range of dates for the service!",
            },
          ]}
          initialValue={[...dateRange]}
        >
          <RangePicker onCalendarChange={changeDateRangeHandler} />
        </Form.Item>
        <Form.Item
          name="size"
          rules={[
            {
              required: true,
              message: 'Please choose a dog size or select "Any"',
            },
          ]}
        >
          <Select
            placeholder='Choose a dog size or select "Any"'
            allowClear
            onChange={changeSizeHandler}
          >
            <Option value="any">Any</Option>
            <Option value="small">Small: 0lbs - 15lbs</Option>
            <Option value="medium">Medium: 16lbs - 40lbs</Option>
            <Option value="large">Large: 41lbs - 100lbs</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please Share some more info about yourself!",
            },
          ]}
        >
          <TextArea
            rows={4}
            showCount
            maxLength={400}
            placeholder="Say something about yourself here"
            onChange={changeDescriptionHandler}
          />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <SubmitButton htmlType="submit">Submit</SubmitButton>
          <ButtonStyled htmlType="button" onClick={resetForm}>
            Reset
          </ButtonStyled>
          <ButtonStyled htmlType="button" onClick={props.onClose}>
            Close
          </ButtonStyled>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default SitterForm;
