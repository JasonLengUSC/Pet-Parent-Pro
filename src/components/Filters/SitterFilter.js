import { useState } from "react";

import { Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import { WrapDiv } from "./SitterFilterStyles";

const { Option } = Select;
const RatingOptions = ["Any","1 Start", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
const LocationOptions = ["LA", "WA", "VA", "FL", "AZ", "MN"];
const sizeOptions = [
  "Any",
  "Small: 0lbs - 15lbs",
  "Medium: 16lbs - 40lbs",
  "Large: 41lbs - 100lbs",
];

const SitterFilter = (props) => {
  const [rating, setCheckedRating] = useState(null);
  const [location, setLocation] = useState(null);
  const [preferedsize, sePreferedsize] = useState(null);

  const changeRatingHandler = (value) => {
    setCheckedRating(value);
  };

  const changeLocationHandler = (value) => {
    setLocation(value);
  };

  const changeSizeHandler = (value) => {
    sePreferedsize(value);
  };

  return (
    <WrapDiv>
      <FilterOutlined
        style={{
          marginLeft: "5px",
          marginBottom: "30px",
          fontSize: "50px",
          color: "rgba(255, 255, 255, 0.4)",
        }}
      />
      <h3>Rating</h3>
      <Select
        showSearch
        placeholder="select a rating"
        value={rating}
        allowClear={true}
        onChange={changeRatingHandler}
        style={{ marginLeft: "4px", width: 150 }}
      >
        {RatingOptions.map((rate) => (
          <Option key={rate}>{rate}</Option>
        ))}
      </Select>
      <h3>Location</h3>
      <Select
        showSearch
        placeholder="select a location"
        value={location}
        allowClear={true}
        onChange={changeLocationHandler}
        style={{ marginLeft: "4px", width: 150 }}
      >
        {LocationOptions.map((location) => (
          <Option key={location}>{location}</Option>
        ))}
      </Select>
      <h3>Prefered Size</h3>
      <Select
        showSearch
        placeholder="select a size"
        value={preferedsize}
        allowClear={true}
        onChange={changeSizeHandler}
        style={{ marginLeft: "4px", width: 150 }}
      >
        {sizeOptions.map((size) => (
          <Option key={size}>{size}</Option>
        ))}
      </Select>
    </WrapDiv>
  );
};

export default SitterFilter;
