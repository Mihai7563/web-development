export class PlayerModel {
    #score = 0;
    #rank;

    constructor(initStats) {
        this.color = initStats.color;
        this.name = initStats.name;
        this.img = initStats.img;
        this.score = initStats.score;
        // this.isFrozen = false;
        
        // this.randomizeColor();
        console.log(this);   
    }

    randomizeColor(){
        let letters = '0123456780ABCDEF'

        for (let i = 0; i < 6; i++) {
            this.color += letters[Math.floor(Math.random() * letters.length)]
        }
    }

    // freeze(duration){
    //     this.isFrozen = true;
    //     setTimeout(() => {
    //         this.isFrozen = false;
    //     }, duration);
    // }

    set score(amount = 1){
        this.#score += amount;
        this.#notifyObservers();
    }
    
    get score(){
        return this.#score;
    }

    set rank(rank){
        this.#rank = rank;
        this.#notifyObservers();
    }

    get rank(){
        return this.#rank;
    }
    
    #notifyObservers(){
        const modelChangedEvt = new CustomEvent("playerModelChanged", {
            detail: {
                score: this.#score,
                rank: this.#rank,
                name: this.name,
                color: this.color
            }
        });

        window.dispatchEvent(modelChangedEvt);
    }
}