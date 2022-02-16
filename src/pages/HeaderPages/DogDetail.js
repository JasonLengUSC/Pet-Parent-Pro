import { useParams } from "react-router-dom";

import { WrapFigure } from "./DogDetailStyles";

const DUMMY_DOGS = [
  {
    username: "TestDogParent01",
    date: "2022/01/04",
    dogId: "Milo",
    breed: "Husky",
    region: "LA",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent02",
    date: "2022/01/09",
    dogId: "Ollie",
    breed: "Husky",
    region: "WA",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent03",
    date: "2022/01/05",
    dogId: "Leo",
    breed: "Husky",
    region: "VA",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent04",
    date: "2022/01/03",
    dogId: "Blue",
    breed: "Husky",
    region: "FL",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent05",
    date: "2022/02/01",
    dogId: "Loki",
    breed: "Husky",
    region: "AZ",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent06",
    date: "2022/02/02",
    dogId: "Cookie",
    breed: "Husky",
    region: "MN",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent07",
    date: "2022/02/04",
    dogId: "Cooper",
    breed: "Husky",
    region: "WA",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
  {
    username: "TestDogParent08",
    date: "2022/01/31",
    dogId: "Bella",
    breed: "Husky",
    region: "LA",
    description:
      "He is two years old, super adorable and cute. Never barks at night, loves paly with people. Feel free to contact for more info.",
  },
];

const DogDetail = () => {
  const params = useParams();

  const dog = DUMMY_DOGS.find((dog) => dog.dogId === params.dogId);

  if (!dog) {
    return <p>No such dog found!</p>;
  }

  return (
    <WrapFigure>
      <h1>{dog.dogId}'s Detail </h1>
      <h2>Parent:</h2>
      <h3>{dog.username}</h3>
      <h2>Date:</h2>
      <h3>{dog.date}</h3>
      <h2>Breed: </h2>
      <h3>{dog.breed}</h3>
      <h2>Region:</h2>
      <h3>{dog.region}</h3>
      <h2>Description: </h2>
      <p>{dog.description}</p>
    </WrapFigure>
  );
};
export default DogDetail;
