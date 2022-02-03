import React, { useState } from "react";
import moment from "moment";

import { ButtonStyled } from "./SitterFormStyles";
import { Form, Input, Select, Rate, DatePicker } from 'antd';
const { Option } = Select;
const { TextArea } = Input;
const { RangePicker } = DatePicker;

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 8 },
};

const SitterForm = (props) => {
  const currentdate = new Date();
  const timeString = currentdate.toLocaleString();
  const [location, setLocation] = useState("");
  const [size, setSize] = useState("any");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState([moment(), moment()]);

  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeSize = (value) => {
    setSize(value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeDateRange = (dates) => {
    setDateRange([...dates]);
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

  return (
    <Form {...layout} onFinish={submitSitterForm}>
      <Form.Item
        name="username"
        label="Username"
        rules={[
          {
            required: true,
            message: "Please enter your username!",
          },
        ]}
        initialValue={props.userInfo.username}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="date"
        label="Date"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={timeString}
      >
        <Input disabled />
      </Form.Item>
      <Form.Item
        name="rating"
        label="User Rating"
        rules={[
          {
            required: true,
          },
        ]}
        initialValue={props.userInfo.rating}
      >
        <Rate disabled />
      </Form.Item>
      <Form.Item
        name="location"
        label="Location"
        rules={[
          {
            required: true,
            message: "Please enter your location!",
          },
        ]}
      >
        <Input
          placeholder="Enter your location here."
          onChange={changeLocation}
        />
      </Form.Item>
      <Form.Item
        name="dateRange"
        label="Preferred Dates"
        rules={[
          {
            required: true,
            message: "Please select a range of dates",
          },
        ]}
        initialValue={[...dateRange]}
      >
        <RangePicker
          onCalendarChange={changeDateRange}
        />
      </Form.Item>
      <Form.Item
        name="size"
        label="Preferred Size"
        rules={[
          {
            required: true,
            message: "Please choose a dog size or select \"Any\"",
          },
        ]}
      >
        <Select
          placeholder='Choose a dog size or select "Any"'
          allowClear
          onChange={changeSize}
        >
          <Option value="any">Any</Option>
          <Option value="small">Small</Option>
          <Option value="medium">Medium</Option>
          <Option value="large">Large</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
            message: "Say something about yourself",
          },
        ]}
      >
        <TextArea
          rows={4}
          showCount
          maxLength={400}
          placeholder="Say something about yourself here."
          onChange={changeDescription}
        />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <ButtonStyled type="primary" htmlType="submit">
          Submit
        </ButtonStyled>
        <ButtonStyled htmlType="button">
          Reset
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};

export default SitterForm;
