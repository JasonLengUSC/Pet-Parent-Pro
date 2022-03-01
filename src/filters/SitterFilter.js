import { useState } from "react";
import moment from "moment";

import { DatePicker, Checkbox } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import { WrapDiv } from "./SitterFilterStyles";

const { RangePicker } = DatePicker;
const CheckGroup = Checkbox.Group;
const RatingOptions = ["1", "2", "3", "4", "5"];
const LocationOptions = ["LA", "WA", "VA", "FL", "AZ", "MN"];
const sizeOptions = [
  "Small: 0lbs - 15lbs",
  "Medium: 16lbs - 40lbs",
  "Large: 41lbs - 100lbs",
];

const SitterFilter = (props) => {
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  const [checkedRating, setCheckedRating] = useState([]);
  const [checkAllRating, setCheckAllRating] = useState(false);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkedLocation, setCheckedLocation] = useState([]);
  const [checkedSize, setCheckedSize] = useState([]);
  const [checkAllSize, setCheckAllSize] = useState(false);

  const changeDateRangeHandler = (dates) => {
    if (dates) {
      setDateRange([...dates]);
    }
  };

  const changeRatingHandler = (list) => {
    setCheckedRating(list);
    setIndeterminate(!!list.length && list.length < RatingOptions.length);
    setCheckAllRating(list.length === RatingOptions.length);
  };
  const checkAllRatingHandler = (e) => {
    setCheckedRating(e.target.checked ? RatingOptions : []);
    setIndeterminate(false);
    setCheckAllRating(e.target.checked);
  };

  const changeLocationHandler = (list) => {
    setCheckedLocation(list);
    setIndeterminate(!!list.length && list.length < LocationOptions.length);
  };

  const changeSizeHandler = (list) => {
    setCheckedSize(list);
    setIndeterminate(!!list.length && list.length < sizeOptions.length);
    setCheckAllSize(list.length === sizeOptions.length);
  };
  const checkAllSizeHandler = (e) => {
    setCheckedSize(e.target.checked ? sizeOptions : []);
    setIndeterminate(false);
    setCheckAllSize(e.target.checked);
  };

  return (
    <WrapDiv>
      <FilterOutlined
        style={{
          marginRight: "100px",
          marginBottom: "20px",
          float: "left",
          fontSize: "50px",
          color: "rgba(255, 255, 255, 0.5)",
        }}
      />
      <h3>Dates</h3>
      <RangePicker
        defaultValue={[...dateRange]}
        allowClear={true}
        showToday={true}
        onCalendarChange={changeDateRangeHandler}
        size={"small"}
        style={{ marginLeft: "5px" }}
      />{" "}
      <h3>Rating</h3>
      <CheckGroup
        options={RatingOptions}
        value={checkedRating}
        onChange={changeRatingHandler}
        style={{ marginLeft: "5px" }}
      />
      <Checkbox
        indeterminate={indeterminate}
        onChange={checkAllRatingHandler}
        checked={checkAllRating}
        style={{ marginLeft: "5px" }}
      >
        All Rating
      </Checkbox>
      <h3>Location</h3>
      <CheckGroup
        options={LocationOptions}
        value={checkedLocation}
        onChange={changeLocationHandler}
        style={{ marginLeft: "5px" }}
      />
      <h3>Prefered Size</h3>
      <CheckGroup
        options={sizeOptions}
        value={checkedSize}
        onChange={changeSizeHandler}
        style={{ marginLeft: "5px" }}
      />
      <Checkbox
        indeterminate={indeterminate}
        onChange={checkAllSizeHandler}
        checked={checkAllSize}
        style={{ marginLeft: "5px" }}
      >All Size</Checkbox>
    </WrapDiv>
  );
};

export default SitterFilter;
