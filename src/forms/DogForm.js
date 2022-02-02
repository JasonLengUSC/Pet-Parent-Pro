import { useState } from "react";

const DogForm = (props) => {
  const currentdate = new Date();
  const timeString =
    currentdate.getFullYear() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getDate() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
  const [location, setLocation] = useState("");
  const [breed, setBreed] = useState("any");
  const [description, setDescription] = useState("");

  const changeLocation = (e) => {
    setLocation(e.target.value);
  };
  const changeBreed = (e) => {
    setBreed(e.target.value);
  };
  const changeDescription = (e) => {
    setDescription(e.target.value);
  };
  const submitSitterForm = () => {
    const formData = {
      name: props.userInfo.username,
      rating: props.userInfo.rating,
      time: timeString,
      location: location,
      breed: breed,
      description: description,
    };
    console.log("Submitted data: ");
    console.log(formData);
  };
  return (
    <>
      <p>Name: {props.userInfo.username}</p>
      <p>Date: {timeString}</p>
      <p>Rating: {props.userInfo.rating}/5</p>
      <label htmlFor="location">Location: </label>
      <input id="location" type="text" required onChange={changeLocation} />
      <label htmlFor="breed">Breed: </label>
      <input id="breed" defaultValue="any" required onChange={changeBreed} />
      <label htmlFor="description">Description: </label>
      <textarea
        id="description"
        rows="5"
        cols="50"
        placeholder="Write something about your dog."
        onChange={changeDescription}
      />
      <label htmlFor="upload"> Choose the File to upload: </label>
      <input id="upload" type="file" />

      <button onClick={submitSitterForm}>Submit</button>
    </>
  );
};

export default DogForm;
