export class Player {
    #score = 0;
    constructor(name) {
        this.name = name;
    }

    newRound(){
        const roundScore = this.rollDice();
        this.#score += roundScore;
        
        return roundScore;
    }

    get score(){
        return this.#score
    }

    rollDice(sides = 6){
        return Math.floor(Math.random() * sides + 1);
    }
}