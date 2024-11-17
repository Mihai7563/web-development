import { Turtle } from "./turtle.js";

export class LuckyTurtle extends Turtle{
    #luckyNumber = super.rollDice();
    constructor(name){
        super(name);
    }

    rollDice(){
        let roundScore = super.rollDice();

        if(roundScore == this.#luckyNumber){
            roundScore = roundScore * 2;
            console.log(`|||| ${this.name} rolled his LUCKY NUMBER ||||`);
        }
        return roundScore;
    }
}