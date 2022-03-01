import { useState } from "react";
import moment from "moment";

import DogBreed from "../datas/DogBreed";

import { DatePicker, Checkbox } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import { WrapDiv } from "./DogFilterStyles";

const { RangePicker } = DatePicker;
const CheckLocationGroup = Checkbox.Group;
const LocationOptions = ["LA", "WA", "VA", "FL", "AZ", "MN"];

const DogFilter = (props) => {
  const [dateRange, setDateRange] = useState([moment(), moment()]);
  const [checkedLocation, setCheckedLocation] = useState([]);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const changeDateRangeHandler = (dates) => {
    if (dates) {
      setDateRange([...dates]);
    }
  };

  const changeLocationHandler = (list) => {
    setCheckedLocation(list);
    setIndeterminate(!!list.length && list.length < LocationOptions.length);
    setCheckAll(list.length === LocationOptions.length);
  };

  const checkAllLocationHandler = (e) => {
    setCheckedLocation(e.target.checked ? LocationOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <WrapDiv>
      <FilterOutlined
        style={{
          marginRight: "100px",
          marginBottom: "20px",
          float: "left",
          fontSize: "50px",
          color: "rgba(255, 255, 255, 0.3)",
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
      />
      <h3>Breed</h3>
      <DogBreed />
      <Checkbox
        indeterminate={indeterminate}
        onChange={checkAllLocationHandler}
        checked={checkAll}
        style={{ marginLeft: "5px" }}
      >
        Check all (will change to breed later)
      </Checkbox>
      <h3>Location</h3>
      <CheckLocationGroup
        options={LocationOptions}
        value={checkedLocation}
        onChange={changeLocationHandler}
        style={{ marginLeft: "5px" }}
      />
    </WrapDiv>
  );
};

export default DogFilter;
