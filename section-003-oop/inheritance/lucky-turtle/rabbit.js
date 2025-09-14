import { Player } from "./player.js";

export class Rabbit extends Player{
    #speedScale = 2;
    #round = 0;
    constructor(name) {
        super(name);
        super.type = 'Rabbit';
    }   

    newRound(){
        this.roundScore = this.#speedScale ** this.#round++;
        this.score = this.roundScore;
        return this.roundScore;
    }

    get roundLog(){
        const log = super.roundLog;
        log.push(`${this.name} ${this.type} (Speed scale: ${this.#speedScale} ) walked ${this.roundScore}m. New distance: ${this.score}m`);
        return log;
    }
}