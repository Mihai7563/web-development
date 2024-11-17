import { ListModel } from "./list-model.js";
import { ListView } from "./list-view.js";

export class ListController{
    constructor(parentElem){
        this.uniqueID = Date.now();

        this.model = new ListModel(this.uniqueID);
        this.view = new ListView(parentElem, this.uniqueID);
    }
}