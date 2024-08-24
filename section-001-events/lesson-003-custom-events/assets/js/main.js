import { PlayerModel } from "./player-model.js";
import { PlayerView } from "./player-view.js";

const root = document.querySelector('#root');

const p1Stats = {
    name: 'Grigore',
    img: './assets/imgs/avatar-1.svg',
    color: '#3df',
    score: 0
};

const p1 = new PlayerModel(p1Stats);

const p1v = new PlayerView(root, p1Stats);

setTimeout(() => {
    const newScore = Math.floor(Math.random() * 100 + 1);
    p1.score = newScore;
    console.log(newScore);
}, 3000)

//init events 
// homework: add card draws in different intervals to appear every 10 secs (they change)