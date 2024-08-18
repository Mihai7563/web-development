import { PlayerModel } from "./player-model.js";
import { PlayerView } from "./player-view.js";

const parentElem = document.querySelector('.root');

let playerModel = new PlayerModel('Florin');
let playerView = new PlayerView(playerModel, parentElem)

console.log('main.js working');


