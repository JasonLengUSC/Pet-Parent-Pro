import { useState } from "react";
import moment from "moment";

import { BreedList } from "../../datas/staticDatas/BreedList";
import Modal from "../UI/Modal";

import {
  Form,
  Input,
  Select,
  DatePicker,
  // message,
  // Upload,
  // Button,
} from "antd";

import {
  UserOutlined,
  EditOutlined,
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { SubmitButton, ButtonStyled } from "./FormButtonStyles";

// import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
const breedOptions = BreedList;

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const layout = {
  wrapperCol: { offset: 4, span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 15 },
};

// const normFile = (e) => {
//   if (Array.isArray(e)) {
//     return e;
//   }
//   return e && e.fileList;
// };

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };

// const beforeUploadHandler = (file) => {
//   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
//   if (!isJpgOrPng) {
//     message.error("You can only upload JPG/PNG file!");
//   }
//   const isLt2M = file.size / 1024 / 1024 < 2;
//   if (!isLt2M) {
//     message.error("Image must smaller than 2MB!");
//   }
//   return isJpgOrPng && isLt2M;
// };

const DogForm = (props) => {
  const [form] = Form.useForm();
  const currentdate = new Date();
  const timeString = currentdate.toLocaleString();
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState([]);
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  // const [imgUrl, setImgUrl] = useState("");

  const changeLocationHandler = (e) => {
    setLocation(e.target.value);
  };
  const changeBreedHandler = (value) => {
    setBreed(value);
  };
  const changeDateRangeHandler = (dates) => {
    if (dates) {
      setDateRange([...dates]);
    }
  };
  const changeDescriptionHandler = (e) => {
    setDescription(e.target.value);
  };
  // const uploadHandler = (info) => {
  //   getBase64(info.file.originFileObj, (imageUrl) => {
  //     setImgUrl(imageUrl);
  //   });
  // };
  const submitFormHandler = () => {
    const formData = {
      name: props.userInfo.username,
      time: timeString,
      location,
      breed,
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
      <h1>Looking for Boarding Service</h1>
      <Form {...layout} form={form} onFinish={submitFormHandler}>
        <Form.Item name="username" initialValue={props.userInfo.username}>
          <Input
            prefix={<UserOutlined style={{ marginRight: "10px" }} />}
            disabled
          />
        </Form.Item>
        <Form.Item name="date" initialValue={timeString}>
          <Input
            prefix={<FieldTimeOutlined style={{ marginRight: "10px" }} />}
            disabled
          />
        </Form.Item>

        <Form.Item
          name="dogName"
          rules={[
            {
              required: true,
              message: "Please enter your dog's name!",
            },
          ]}
        >
          <Input
            placeholder="Enter your dog's name here"
            prefix={<EditOutlined style={{ marginRight: "10px" }} />}
            onChange={changeLocationHandler}
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
            prefix={<EnvironmentOutlined style={{ marginRight: "10px" }} />}
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
          name="breed"
          rules={[
            {
              required: true,
              message: "Please choose your dog's breed!",
            },
          ]}
        >
          <Select
            showSearch
            placeholder="Choose the your dog's breed here"
            value={breed}
            allowClear={true}
            onChange={changeBreedHandler}
          >
            {breedOptions.map((breed) => (
              <Option key={breed}>{breed}</Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="description"
          rules={[
            {
              required: true,
              message: "Please Share some more info about your dog!",
            },
          ]}
        >
          <TextArea
            rows={4}
            showCount
            maxLength={400}
            placeholder="Say something about your dog here"
            onChange={changeDescriptionHandler}
          />
        </Form.Item>
        {/* <Form.Item
        name="Attached File"
        label="Attachment"
        rules={[
          {
            required: true,
            message: "Upload pics of your dog",
          },
        ]}
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload 
        beforeUpload={beforeUploadHandler} 
        onChange={uploadHandler}
        action="~/Desktop"
        >
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item> */}
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

export default DogForm;
