export class CardModel{
    constructor(cards) {
        this.cards = cards;
        this.shuffleDeck();
    }

    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    drawCard() {
        const card = this.cards.shift();
        this.cards.push(card);

        const event = new CustomEvent("cardDrawn", {
            detail: { 
                card: card
            }
        });

        window.dispatchEvent(event);
    }
}