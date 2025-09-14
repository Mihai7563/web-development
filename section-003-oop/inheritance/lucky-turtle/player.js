export class Player {
    #type;
    #score = 0;
    constructor(name) {
        this.name = name;
        this.type = 'Generic Player';
    }   


    newRound(){
        console.log(`[${this.type}] ${this.name} new round`);
    }


    get roundLog(){
        return [`[${this.type}] ${this.name} round log`];
    }


    get type(){
        return this.#type;
    }


    get score(){
        return this.#score;
    }


    set score(amount){
        this.#score += amount;
    }


    set type(type){
        this.#type = type;
    }
}