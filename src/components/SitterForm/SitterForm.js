import { React, Fragment, useState } from "react";

const SitterForm = (props) => {
    const currentdate = new Date();
    const timeString = currentdate.getFullYear() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getDate() + " "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes();
    const [location, setLocation] = useState("");
    const [size, setSize] = useState("any");
    const [description, setDescription] = useState("");

    const changeLocation = (e) => {
        setLocation(e.target.value);
    };
    const changeSize = (e) => {
        setSize(e.target.value);
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
            size: size,
            description: description,
        };
        console.log("Submitted data: ");
        console.log(formData);
    };

    return (
        <Fragment>
            <p>Name: {props.userInfo.username}</p>
            <p>Date: {timeString}
            </p>
            <p>Rating: {props.userInfo.rating}/5</p>
            <label htmlFor="location">Location: </label>
            <input
                type="text"
                id="location"
                required
                onChange={changeLocation}
            />
            <label htmlFor="size">Preferred Size: </label>
            <select
                id="size"
                defaultValue="any"
                required
                onChange={changeSize}
            >
                <option value="any">Any</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
            <label htmlFor="description">Description: </label>
            <textarea
                id="description"
                rows="5"
                cols="50"
                placeholder="Write something about yourself."
                onChange={changeDescription}
            />
            <button
                onClick={submitSitterForm}
            >Submit
            </button>
        </Fragment>
    );
};

export default SitterForm;