import settings from "./settings.js";
import { CardModel } from "./cards-model.js";
import { CardView } from "./cards-view.js";

const parentElem = document.querySelector('.card-container');

const cm = new CardModel(settings.cards);
const cv = new CardView(parentElem);

setInterval(() => cm.drawCard(), settings.interval);
