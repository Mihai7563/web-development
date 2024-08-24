export class CardView {
    constructor(parentElem) {
        this.parentElem = parentElem;
        this.cardElem = null;
        this.cardType = null;
        this.cardText = null;

        this.init();
        window.addEventListener("cardDrawn", (e) => this.flipCard(e));
    }

    init() {
        this.cardElem = document.createElement('div');
        this.cardElem.classList.add('card');
        this.parentElem.append(this.cardElem);

        const cardBack = document.createElement('div');
        cardBack.classList.add('card-back')
        this.cardElem.append(cardBack);

        const cardFront = document.createElement('div');
        cardFront.classList.add('card-front')
        this.cardElem.append(cardFront);

        this.cardType = document.createElement('div');
        cardFront.append(this.cardType);

        this.cardText = document.createElement('div');
        cardFront.append(this.cardText);
    }
    
    flipCard(event) {
        console.log('card flipped');
        
        this.cardElem.classList.add('flip');
        setTimeout(() => this.cardElem.classList.remove('flip'), 6000);
        this.cardType.textContent = event.detail.card.type;
        this.cardText.textContent = event.detail.card.text;
    }
}