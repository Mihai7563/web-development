import { Turtle } from "./turtle.js";

export class LuckyTurtle extends Turtle{
    #luckyNumber = super.rollDice();
    constructor(name){
        super(name);
        this.specialPower = 'lucky';
    }

    rollDice(){
        let roundScore = super.rollDice();

        if(roundScore == this.#luckyNumber){
            roundScore *= 2;
            console.log(`%c ${this.name} rolled his LUCKY NUMBER`, 'color: gold');
        }
        return roundScore;
    }
}