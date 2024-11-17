import { Turtle } from "./turtle.js";
import { LuckyTurtle } from "./lucky-turtle.js";

let turtles = [];
let turtleNames = ['Donatello', 'Leonardo', 'Michelangelo', 'Raphael'];

for(let i = 0; i < turtleNames.length; i++){
    const luckyTurtle = Math.random() <= 0.4;
    console.log(luckyTurtle);

    if(luckyTurtle == true){
        turtles.push(new LuckyTurtle(`${turtleNames[i]} (LUCKY)`));
    }
    else{
        turtles.push(new Turtle(turtleNames[i]));
    }
}

console.log(turtles);


for(let i = 0; i < turtles.length; i++){
    console.log('');
    console.log(`🐢🐢ROUND ${i + 1} BEGINS🐢🐢`);

    turtles.forEach(turtle => {
        console.log('---------------------------');
        
        const roundScore = turtle.newRound();
        console.log(`${turtle.name} walked ${roundScore}m. New distance: ${turtle.score}m`);
    })
}