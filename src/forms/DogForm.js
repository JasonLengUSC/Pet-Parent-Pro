import { useState } from "react";
import moment from "moment";

import Modal from "../components/UI/Modal";

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
  FieldTimeOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { SubmitButton, ButtonStyled } from "./FormButtonStyles";

// import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;
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
  const [breed, setBreed] = useState("any");
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
            prefix={<UserOutlined style={{ "margin-right": "10px" }} />}
            disabled
          />
        </Form.Item>
        <Form.Item name="date" initialValue={timeString}>
          <Input
            prefix={<FieldTimeOutlined style={{ "margin-right": "10px" }} />}
            disabled
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
            prefix={<EnvironmentOutlined style={{ "margin-right": "10px" }} />}
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
            placeholder="Choose the your dog's breed here"
            allowClear
            onChange={changeBreedHandler}
          >
            <Option value="Affenpinscher">Affenpinscher</Option>
            <Option value="African">African</Option>
            <Option value="Airedale">Airedale</Option>
            <Option value="Akita">Akita</Option>
            <Option value="Appenzeller">Appenzeller</Option>
            <Option value="Shepherd Australian">Shepherd Australian</Option>
            <Option value="Basenji">Basenji</Option>
            <Option value="Beagle">Beagle</Option>
            <Option value="Bluetick">Bluetick</Option>
            <Option value="Borzoi">Borzoi</Option>
            <Option value="Bouvier">Bouvier</Option>
            <Option value="Boxer">Boxer</Option>
            <Option value="Brabancon">Brabancon</Option>
            <Option value="Briard">Briard</Option>
            <Option value="Norwegian Buhund">Norwegian Buhund</Option>
            <Option value="Boston Bulldog">Boston Bulldog</Option>
            <Option value="English Bulldog">English Bulldog</Option>
            <Option value="French Bulldog">French Bulldog</Option>
            <Option value="Staffordshire Bullterrier">
              Staffordshire Bullterrie
            </Option>
            <Option value="Australian Cattledog">Australian Cattledog</Option>
            <Option value="Chihuahua">Chihuahua</Option>
            <Option value="Chow">Chow</Option>
            <Option value="Clumber">Clumber</Option>
            <Option value="Cockapoo">Cockapoo</Option>
            <Option value="Border Collie">Border Collie</Option>
            <Option value="Coonhound">Coonhound</Option>
            <Option value="Cardigan Corgi">Cardigan Corgi</Option>
            <Option value="Cotondetulear">Cotondetulear</Option>
            <Option value="Dachshund">Dachshund</Option>
            <Option value="Dalmatian">Dalmatian</Option>
            <Option value="Great Dane">Great Dane</Option>
            <Option value="Scottish Deerhound">Scottish Deerhound</Option>
            <Option value="Dhole">Dhole</Option>
            <Option value="Dingo">Dingo</Option>
            <Option value="Doberman">Doberman</Option>
            <Option value="Norwegian Elkhound">Norwegian Elkhound</Option>
            <Option value="Entlebucher">Entlebucher</Option>
            <Option value="Eskimo">Eskimo</Option>
            <Option value="Lapphund Finnish">Lapphund Finnish</Option>
            <Option value="Bichon Frise">Bichon Frise</Option>
            <Option value="Germanshepherd">Germanshepherd</Option>
            <Option value="Italian Greyhound">Italian Greyhound</Option>
            <Option value="Groenendael">Groenendael</Option>
            <Option value="Havanses">Havanses</Option>
            <Option value="Afghan Hound">Afghan Hound</Option>
            <Option value="Basset Hound">Basset Hound</Option>
            <Option value="Blood Hound">Blood Hound</Option>
            <Option value="English Hound">English Hound</Option>
            <Option value="Ibizan Hound">Ibizan Hound</Option>
            <Option value="Plott Hound">Plott Hound</Option>
            <Option value="Walker Hound">Walker Hound</Option>
            <Option value="Husky">Husky</Option>
            <Option value="Keeshond">Keeshond</Option>
            <Option value="Kelpie">Kelpie</Option>
            <Option value="Komondor">Komondor</Option>
            <Option value="Kuvasz">Kuvasz</Option>
            <Option value="Labradoodle">Labradoodle</Option>
            <Option value="Labrador">Labrador</Option>
            <Option value="Leonber">Leonber</Option>
            <Option value="Lhasa">Lhasa</Option>
            <Option value="Malamute">Malamute</Option>
            <Option value="Malinois">Malinois</Option>
            <Option value="Maltese">Maltese</Option>
            <Option value="Bull Mastiff">Bull Mastiff</Option>
            <Option value="English Mastiff">English Mastiff</Option>
            <Option value="Tibetan Mastiff">Tibetan Mastiff</Option>
            <Option value="Mexicanhairless">Mexicanhairless</Option>
            <Option value="Mix">Mix</Option>
            <Option value="Bernese Mountain">Bernese Mountain</Option>
            <Option value="Swiss Mountain">Swiss Mountain</Option>
            <Option value="Newfoundland">Newfoundland</Option>
            <Option value="Otterhound">Otterhound</Option>
            <Option value="Caucasian Ovcharka">Caucasian Ovcharka</Option>
            <Option value="Papillon">Papillon</Option>
            <Option value="Pekinese">Pekinese</Option>
            <Option value="Pembroke">Pembroke</Option>
            <Option value="Miniature Pinscher">Miniature Pinscher</Option>
            <Option value="Pitbull">Pitbull</Option>
            <Option value="German Pointer">German Pointer</Option>
            <Option value="Germanlonghair Pointer">
              Germanlonghair Pointer
            </Option>
            <Option value="Pomeranian">Pomeranian</Option>
            <Option value="Miniature Poodle">Miniature Poodle</Option>
            <Option value="Standard Poodle">Standard Poodle</Option>
            <Option value="Toy Poodle">Toy Poodle</Option>
            <Option value="Pug">Pug</Option>
            <Option value="Puggle">Puggle</Option>
            <Option value="Pyrenees">Pyrenees</Option>
            <Option value="Redbone">Redbone</Option>
            <Option value="Chesapeake Retriever">Chesapeake Retriever</Option>
            <Option value="Curly Retriever">Curly Retriever</Option>
            <Option value="Flatcoated Retriever">Flatcoated Retriever</Option>
            <Option value="Golden Retriever">Golden Retriever</Option>
            <Option value="Rhodesian Ridgeback">Rhodesian Ridgeback</Option>
            <Option value="Rottweiler">Rottweiler</Option>
            <Option value="Sluki">Sluki</Option>
            <Option value="Samoyed">Samoyed</Option>
            <Option value="Schipperke">Schipperke</Option>
            <Option value="Giant Schnauzer">Giant Schnauzer</Option>
            <Option value="Miniature Schnauzer">Miniature Schnauzer</Option>
            <Option value="English Setter">English Setter</Option>
            <Option value="Gordon Setter">Gordon Setter</Option>
            <Option value="Irish Setter">Irish Setter</Option>
            <Option value="English Sheepdog">English Sheepdog</Option>
            <Option value="Shetland Sheepdog">Shetland Sheepdog</Option>
            <Option value="Shiba">Shiba</Option>
            <Option value="Shihtzu">Shihtzu</Option>
            <Option value="Blenheim Spaniel">Blenheim Spaniel</Option>
            <Option value="Brittany Spaniel">Brittany Spaniel</Option>
            <Option value="Cocker Spaniel">Cocker Spaniel</Option>
            <Option value="Irish Spaniel">Irish Spaniel</Option>
            <Option value="Japanese Spaniel">Japanese Spaniel</Option>
            <Option value="Sussex Spaniel">Sussex Spaniel</Option>
            <Option value="Welsh Spaniel">Welsh Spaniel</Option>
            <Option value="English Spaniel">English Spaniel</Option>
            <Option value="Stbernard">Stbernard</Option>
            <Option value="American Terrier">American Terrier</Option>
            <Option value="Australian Terrier">Australian Terrier</Option>
            <Option value="Bedlington Terrier">Bedlington Terrier</Option>
            <Option value="Border Terrier">Border Terrier</Option>
            <Option value="Carin Terrier">Carin Terrier</Option>
            <Option value="Dandie Terrier">Dandie Terrier</Option>
            <Option value="Fox Terrier">Fox Terrier</Option>
            <Option value="Irish Terrier">Irish Terrier</Option>
            <Option value="Kerryblue Terrier">Kerryblue Terrier</Option>
            <Option value="Lakeland Terrier">Lakeland Terrier</Option>
            <Option value="Norwich Terrier">Norwich Terrier</Option>
            <Option value="Patterdale Terrier">Patterdale Terrier</Option>
            <Option value="Russell Terrier">Russell Terrier</Option>
            <Option value="Scottish Terrier">Scottish Terrier</Option>
            <Option value="Sealyham Terrier">Sealyham Terrier</Option>
            <Option value="Silky Terrier">Silky Terrier</Option>
            <Option value="Tibetan Terrier">Tibetan Terrier</Option>
            <Option value="Toy Terrier">Toy Terrier</Option>
            <Option value="Welsh Terrier">Welsh Terrier</Option>
            <Option value="Westhighland Terrier">Westhighland Terrier</Option>
            <Option value="Wheaten Terrier">Wheaten Terrier</Option>
            <Option value="Yorkshier Terrier">Yorkshier Terrier</Option>
            <Option value="Tervuren">Tervuren</Option>
            <Option value="Vizsla">Vizsla</Option>
            <Option value="Spanish Waterdog">Spanish Waterdog</Option>
            <Option value="Weimaraner">Weimaraner</Option>
            <Option value="Whippet">Whippet</Option>
            <Option value="Irish Wolfhound">Irish Wolfhound</Option>
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
