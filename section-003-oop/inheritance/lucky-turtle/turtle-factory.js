import { GamblerTurtle } from "./gambler-turtle.js";
import { LuckyTurtle } from "./lucky-turtle.js";
import { Turtle } from "./turtle.js";

export function turtleFactory(name){
    const turtleTypes = ['average', 'lucky', 'gambler'];
    const turtleType = turtleTypes[Math.floor(Math.random() * turtleTypes.length)];
    switch (turtleType) {
        case 'average':
            return new Turtle(name);

        case 'lucky':
            return new LuckyTurtle(name);

        case 'gambler':
            return new GamblerTurtle(name);
    
        default:
            console.error(`Invalid turtle type ${turtleType}`);
            break;
    }

}