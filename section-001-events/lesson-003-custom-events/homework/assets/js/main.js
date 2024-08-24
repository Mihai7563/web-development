import { CardModel } from "./cards-model.js";
import { CardView } from "./cards-view.js";

const parentElem = document.querySelector('.card-container');

const cards = [
    "Dare: Sing a song loudly",
    "Bonus: Get 5 extra points",
    "Dare: Do 20 pushups",
    "Bonus: Skip a turn",
    "Dare: Dance for 1 minute",
    "Bonus: Steal a card from another player",
];

const cm = new CardModel(cards);
const cv = new CardView(parentElem);

    setInterval(() => cm.drawCard(), 7000);
