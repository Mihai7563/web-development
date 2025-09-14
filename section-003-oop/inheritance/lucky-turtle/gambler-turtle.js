import { Turtle } from "./turtle.js";

export class GamblerTurtle extends Turtle{
    #addictionScale = Math.floor(Math.random() * 4 + 1);
    constructor(name){
        super(name);
        this.specialPower = 'gambler';
    }

    rollDice(){
        let roundScore = super.rollDice();
        const winGamble = Math.random() <= 0.5;

        if(winGamble){
            roundScore *= this.#addictionScale + 1;
            console.log(`%c ${this.name} gambled successfully, (Addiction scale: ${this.#addictionScale})`, 'color: purple');
        }
        else{
            roundScore *= -(this.#addictionScale + 1);
            console.log(`%c ${this.name} failed his gamble, (Addiction scale: ${this.#addictionScale})`, 'color: red');
        }

        return roundScore;
    }
}