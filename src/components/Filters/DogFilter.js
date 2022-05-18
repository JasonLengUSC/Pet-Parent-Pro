import { useEffect, useState } from "react";

import { Select } from "antd";

import { WrapDiv } from "./DogFilterStyles";

const { Option } = Select;
const LocationOptions = ["LA", "WA", "VA", "FL", "AZ", "MN"];
const breedList = ["Any"];

const DogFilter = (props) => {
  const [breedOptions, setBreedOptions] = useState("");

  useEffect(() => {
    fetchBreedListHandler();
  }, []);

  const fetchBreedListHandler = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        const breedJson = data.message;
        Object.keys(breedJson).forEach((key) => {
          const breedArray = breedJson[key];
          if (breedArray.length === 0) {
            breedList.push(key);
          } else {
            breedArray.forEach((subBreed) => {
              breedList.push(subBreed + " " + key);
            });
          }
        });
        console.log("Printing breedList: ", breedList);
        setBreedOptions(
          breedList.map((breed) => (
            <Option key={breed} value={breed}>
              {breed}
            </Option>
          ))
        );
      });
  };

  const [location, setLocation] = useState(null);
  const [dogBreed, setDogBreed] = useState(null);

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
            <Option key={location} value={location}>
              {location}
            </Option>
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
          {breedOptions}
        </Select>
      </WrapDiv>
    </>
  );
};

export default DogFilter;
