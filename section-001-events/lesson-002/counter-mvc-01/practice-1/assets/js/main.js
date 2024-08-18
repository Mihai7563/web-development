import { PlayerModel } from "./player-model.js";
import { PlayerView } from "./player-view.js";
import { PlayerView2 } from "./player-view-2.js";
import { Game } from "./game.js"

const players = 5;
const root = document.querySelector('#root');
const root2 = document.querySelector('#root-2');

let imgs = ['avatar-1', 'avatar-2', 'avatar-3', 'avatar-4', 'avatar-5', ];
let names = ['Marian-Constantin', 'Laurentiu', 'Tarzan', 'Grigore', 'Picasso'];

let models = [];
for (let i = 0; i < players; i++) {
    models.push(new PlayerModel(names[i], imgs[i], 0));
    models[i].addObserver(new PlayerView(models[i], root, ['counter-default', `counter-${i + 1}`]));
    models[i].addObserver(new PlayerView2(models[i], root2, ['counter-default']));
}

const game = new Game(models);

setInterval(() => {
    models.forEach(model => model.score = Math.floor(Math.random() * 6 + 1));
    models.sort((a, b) => b.score - a.score);
    models.forEach((model, i) => model.rank = i + 1);
}, 1000)


// HOMEWORK: using mvc, add players that have icons and names

