console.log("main.js working");
const apiKey = "UoC7e169/qnYJLFgzmU+hw==jzi3FMi3mwyBBGo7";
const breed = "labrador retriever";
const apiUrl = `https://api.api-ninjas.com/v1/dogs?name=${encodeURIComponent(
  breed
)}`;
console.log(`Fetching data from: ${apiUrl}`);

const card = document.querySelector("#card");
const cardImg = card.querySelector("#card-img");
const cardTitle = card.querySelector("#card-title");
const cardStats = card.querySelector(".stats");
const minLifeExpectancy = cardStats.querySelector("#min-life-expectancy"); 
const maxLifeExpectancy = cardStats.querySelector("#max-life-expectancy"); 
const playfulness = cardStats.querySelector("#playfulness"); 

const fetchOptions = {
  headers: {
    "X-API-Key": apiKey,
  },
};

fetch(apiUrl, fetchOptions)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    card.classList.remove("d-none");
    if (data.length > 0) {
      cardImg.src = data[0].image_link;
      cardImg.alt = `${data[0].name} image`;
      cardTitle.textContent = `Breed: ${data[0].name}`;
        minLifeExpectancy.textContent = data[0].min_life_expectancy;
        maxLifeExpectancy.textContent = data[0].max_life_expectancy;
        playfulness.textContent = data[0].playfulness;
    } else {
      console.error("No data found for the specified breed.");
    }
  });
