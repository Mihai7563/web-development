export class CardView {
    constructor(parentElem) {
        this.parentElem = parentElem;
        this.cardElem = null;
        this.cardBack = null;

        this.init();
        window.addEventListener("cardDrawn", (e) => this.flipCard(e));
    }

    init() {
        this.cardElem = document.createElement('div');
        this.cardElem.classList.add('card');
        this.parentElem.append(this.cardElem);

        this.cardBack = document.createElement('div');
        this.cardBack.classList.add('card-back')
        this.cardElem.append(this.cardBack);

        this.cardFront = document.createElement('div');
        this.cardFront.classList.add('card-front')
        this.cardElem.append(this.cardFront);
    }
    
    flipCard(event) {
        console.log('card flipped');
        
        this.cardElem.classList.add('flip');
        setTimeout(() => this.cardElem.classList.remove('flip'), 6000);
        this.cardBack.textContent = event.detail.card;
    }
}