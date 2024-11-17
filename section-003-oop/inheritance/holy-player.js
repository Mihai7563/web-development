import { Player } from "./player.js";

export class HolyPlayer extends Player{
    #taunt;
    #curse;

    constructor(name, taunt, curse = 'Nu mi-s bine maica cu numarul bestiei'){
        super(name);
        this.#taunt = taunt;
        this.#curse = curse;
    }

    // newRound(){
    //     const roundScore = super.newRound();
    //     console.log(roundScore);

    //     if(roundScore == 6){
    //         console.log('Nu mi-s bine maica cu numarul bestiei');
    //         this.score -= roundScore;
    //     }

    //     return roundScore;
    // }

    get taunt(){
        return this.#taunt;
    }

    rollDice(){
        let roundScore = super.rollDice();

        if(roundScore == 6){
            console.log(`%c ${this.#curse}` , 'background: red');
            roundScore = 0;
        }
        return roundScore;
    }
}