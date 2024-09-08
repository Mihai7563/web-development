import settings from "./settings.js";
import { CardModel } from "./cards-model.js";
import { CardView } from "./cards-view.js";


export class CardsController{
    constructor(parentElem){
        this.uniqueID = Date.now();
        this.model = new CardModel(settings.cards, this.uniqueID);
        this.view = new CardView(parentElem, this.uniqueID);

        // setInterval(() => cm.drawCard(), settings.interval);
        this.view.cardElem.addEventListener('click', () => this.model.drawCard());
    }
}