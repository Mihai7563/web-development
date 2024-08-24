console.log("main.js loaded");

// create custom events
const catFound = new CustomEvent("animalfound", {
  detail: {
    name: "cat",
  },
});

const dogFound = new CustomEvent("animalfound", {
  detail: {
    name: "dog",
  },
});


// add an appropriate event listener
window.addEventListener("animalfound", (e) => console.log(e));

// dispatch the events
window.dispatchEvent(catFound);
// element.dispatchEvent(dogFound);

// "cat" and "dog" logged in the console
