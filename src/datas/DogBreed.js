const DogBreed = () => {
  let breedList = [];

  const fetchDogBreedListHander = () => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.message);
        for (let breedArray in data.message) {
          if (breedArray.length === 0) {
            breedList.push(JSON.stringify(breedArray));
            console.log(breedList);
          } else {
            for (let subBreed in breedArray) {
              breedList.push(JSON.stringify(breedArray[subBreed]));
              console.log(breedList);
            }
          }
        }
      });
  };
  return (
    <button onClick={fetchDogBreedListHander}>
      test only (fetch breed) (need to work on if condition later)
    </button>
  );
};

export default DogBreed;
