export class PlayerModel {
    #score = 0;
    #rank;

    constructor(name, img, initScore = 0) {
        this.color = '#'
        this.name = name;
        this.img = img;
        this.observers = [];
        this.isFrozen = false;

        this.randomizeColor();
        this.score = initScore;
    }

    randomizeColor(){
        let letters = '0123456780ABCDEF'

        for (let i = 0; i < 6; i++) {
            this.color += letters[Math.floor(Math.random() * letters.length)]
        }
    }

    freeze(duration){
        this.isFrozen = true;
        setTimeout(() => {
            this.isFrozen = false;
        }, duration);
    }

    set score(amount = 1){
        if(this.isFrozen == false){
            this.#score += amount;
            this.notifyObservers();
        }
    }
    
    get score(){
        return this.#score;
    }

    set rank(rank){
        this.#rank = rank;
        this.notifyObservers();
    }

    get rank(){
        return this.#rank;
    }

    addObserver(newObserver){
        this.observers.push(newObserver);
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.update());
    }
}