console.log("working");
const container = document.querySelector("#joke-content");
const jokeBtn = document.querySelector("#joke-btn");
const icon = document.querySelector("#joke-btn i");
const categoriesDropdown = document.querySelector('#categories-dropdown');


jokeBtn.addEventListener("click", () => {
  displayLoadingMsg();
  const category = categoriesDropdown.value;

  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => {
      console.log("response received");
      return response.json();
    })
    .then((data) => {
        // console.log("response body was processed");
        displayData(data);
    });
});

fetch("https://api.chucknorris.io/jokes/categories")
  .then(response => response.json())
  .then(data => 
    data.forEach(category => {
      categoriesDropdown.innerHTML += `<option value="${category}">${category}</option>`
    })
)

function displayData(data){
    container.innerText = data.value;
    icon.classList.add("d-none")
    jokeBtn.classList.remove("disabled");
}

function displayLoadingMsg(msg = 'Loading...'){
    jokeBtn.classList.add("disabled");
    icon.classList.remove("d-none");
    container.innerText = msg;
}

// MI AM DAT SEAMA CA NU MERGE SA PUN IN EXTERIOR (CA IDEE) 🏆🏆

console.log("end of file");
