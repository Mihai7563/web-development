import { Player } from "./player.js";

export class Turtle extends Player {
    #specialPower;
    constructor(name) {
        super(name);
        super.type = 'Turtle';
        this.specialPower = 'average';
        this.roundScore = 0;
    }

    set specialPower(specialPower){
        this.#specialPower = specialPower;
    }

    
    get specialPower(){
        return this.#specialPower;
    }


    newRound(){
        this.roundScore = this.rollDice();
        this.score = this.roundScore;    
        return this.roundScore;
    }

    
    rollDice(sides = 6){
        return Math.floor(Math.random() * sides + 1);
    }

    get roundLog(){
        const log = super.roundLog;
        log.push(`${this.name} (${this.#specialPower} ${this.type}) walked ${this.roundScore}m. New distance: ${this.score}m`);
        return log;
    }
}