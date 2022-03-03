import { useState } from "react";

import { BreedList } from "../../datas/staticDatas/BreedList";

import { Select } from "antd";

import { WrapDiv } from "./DogFilterStyles";

const { Option } = Select;
const LocationOptions = ["LA", "WA", "VA", "FL", "AZ", "MN"];
const breedOptions = BreedList;

const DogFilter = (props) => {
  const [location, setLocation] = useState([]);
  const [dogBreed, setDogBreed] = useState([]);

  const changeLocationHandler = (value) => {
    setLocation(value);
  };

  const changeBreedHandler = (value) => {
    setDogBreed(value);
  };

  return (
    <>
      <WrapDiv>
        <h3>Location</h3>
        <Select
          showSearch
          placeholder="select a location"
          value={location}
          allowClear={true}
          onChange={changeLocationHandler}
          style={{ marginLeft: "5px", width: 175 }}
        >
          {LocationOptions.map((location) => (
            <Option key={location}>{location}</Option>
          ))}
        </Select>
        <h3>Breed</h3>
        <Select
          showSearch
          placeholder="select a breed"
          value={dogBreed}
          allowClear={true}
          onChange={changeBreedHandler}
          style={{ marginLeft: "5px", width: 175 }}
        >
          {breedOptions.map((breed) => (
            <Option key={breed}>{breed}</Option>
          ))}
        </Select>
      </WrapDiv>
    </>
  );
};

export default DogFilter;
