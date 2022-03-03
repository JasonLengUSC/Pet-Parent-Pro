const BreedList = [];

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
        BreedList.push(key);
      } else {
        for (let subBreed in breedArray) {
          BreedList.push(breedArray[subBreed] + " " + key);
        }
      }
    });
    console.log("Printing breedList: ", BreedList);
  });

export { BreedList };
