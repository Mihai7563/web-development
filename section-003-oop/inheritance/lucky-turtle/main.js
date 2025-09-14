import { TurtleRaceGame } from "./game.js";
import { turtleFactory } from "./turtle-factory.js";
import { Rabbit } from './rabbit.js';

const game = new TurtleRaceGame('Dabuleni dus-intors');

const turtleNames = ['Donatello', 'Leonardo', 'Michelangelo', 'Raphael'];
turtleNames.forEach(turtle => game.addPlayer(turtleFactory(turtle)));

const rabbitNames = ['Bugs', 'Thumper'];
rabbitNames.forEach(rabbit => game.addPlayer(new Rabbit(rabbit)));


game.listPlayers();

game.start();

console.log(game.leaderboard);
game.showWinner();