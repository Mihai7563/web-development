import { Turtle } from "./turtle.js";
import { LuckyTurtle } from "./lucky-turtle.js";
import { GamblerTurtle } from "./gambler-turtle.js";

let turtles = [];
let turtleNames = ['Donatello', 'Leonardo', 'Michelangelo', 'Raphael'];
const turtleTypes = ['average', 'lucky', 'gambler']

console.log('Presenting the competitors: ');
console.log('');

for(let i = 0; i < turtleNames.length; i++){
    const turtleType = turtleTypes[Math.floor(Math.random() * turtleTypes.length)];

    switch (turtleType) {
        case 'average':
            turtles.push(new Turtle(turtleNames[i]))
            break;

        case 'lucky':
            turtles.push(new LuckyTurtle(turtleNames[i]))
            break;

        case 'gambler':
            turtles.push(new GamblerTurtle(turtleNames[i]))
            break;
    
        default:
            console.error(`Invalid turtle type ${turtleType}`);
            break;
    }

    console.log(`${turtles[i].name} (${turtles[i].specialPower} turtle) enters the race!!!`);
}


console.log('');
console.log('🏁The race begins🏁');
console.log('----------------------------');


for(let i = 0; i < turtles.length; i++){
    console.log('');
    console.log(`🐢🐢ROUND ${i + 1} BEGINS🐢🐢`);

    turtles.forEach(turtle => {
        console.log('---------------------------');
        
        const roundScore = turtle.newRound();
        console.log(`${turtle.name} (${turtle.specialPower} turtle) walked ${roundScore}m. New distance: ${turtle.score}m`);
    })
}