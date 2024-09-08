import { ListModel } from "./list-model.js";
import { ListView } from "./list-view.js";

export class ListController{
    constructor(parentElem){
        this.viewUniqueID = Date.now();
        this.modelUniqueID = Date.now() + 1;

        this.model = new ListModel(this.viewUniqueID, this.modelUniqueID, this.position);
        this.view = new ListView(parentElem, this.viewUniqueID, this.modelUniqueID);

        this.view.init();
    }
}