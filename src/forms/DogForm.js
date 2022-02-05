import { useState } from "react";
import moment from "moment";

import { ButtonStyled } from "./DogFormStyles";

import { Form, Input, Select, Rate, DatePicker, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

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

const DogForm = (props) => {
  const [form] = Form.useForm();
  const currentdate = new Date();
  const timeString = currentdate.toLocaleString();
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("any");
  const [description, setDescription] = useState("");
  const [dateRange, setDateRange] = useState([moment(), moment()]);

  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeBreed = (e) => {
    setBreed(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const changeDateRange = (dates) => {
    setDateRange([...dates]);
  };
  const submitFormHandler = () => {
    const formData = {
      name: props.userInfo.username,
      rating: props.userInfo.rating,
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
    <Form {...layout} form={form} onFinish={submitFormHandler}>
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
        <RangePicker onCalendarChange={changeDateRange} />
      </Form.Item>

      <Form.Item
        name="breed"
        label="Dog Breed"
        rules={[
          {
            required: true,
            message: "Please choose a breed",
          },
        ]}
      >
        <Select
          placeholder="Choose the breed of your dog"
          allowClear
          onChange={changeBreed}
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
          <Option value="Germanlonghair Pointer">Germanlonghair Pointer</Option>
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
        label="Description"
        rules={[
          {
            required: true,
            message: "Say something about your dog",
          },
        ]}
      >
        <TextArea
          rows={4}
          showCount
          maxLength={400}
          placeholder="Say something about your dog here."
          onChange={changeDescription}
        />
      </Form.Item>
      <Form.Item
        name="Attached File"
        label="Attachment"
        rules={[
          {
            required: true,
            message: "Upload pics of your dog",
          },
        ]}
      >
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>Upload</Button>
        </Upload>
      </Form.Item>
      <Form.Item {...tailLayout}>
        <ButtonStyled type="primary" htmlType="submit">
          Submit
        </ButtonStyled>
        <ButtonStyled htmlType="button" onClick={resetForm}>
          Reset
        </ButtonStyled>
      </Form.Item>
    </Form>
  );
};

export default DogForm;
