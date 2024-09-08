import { ListController } from "./list-controller.js";

console.log('main.js working');

const parentElem = document.querySelector('.page-body');
const newListCard = document.querySelector('.new-list-card');

newListCard.addEventListener('click', () => {
    new ListController(parentElem);
})

