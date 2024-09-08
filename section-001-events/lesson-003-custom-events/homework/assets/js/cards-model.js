export class CardModel{
    constructor(cards, uniqueID) {
        this.cards = cards;
        this.uniqueID = uniqueID;
        this.drawCount = 0;

        this.shuffleDeck();
        console.log(this);
    }

    shuffleDeck() {
        this.cards.sort(() => Math.random() - 0.5);
    }

    drawCard() {
        const card = this.cards.shift();
        this.cards.push(card);
        
        const event = new CustomEvent(`cardDrawn${this.uniqueID}`, {
            detail: { 
                card: card,
                cardIndex: this.drawCount++ % this.cards.length + 1,
                stackSize: this.cards.length,
            }
        });
        
        console.log('dispatching event');
        console.log(event);
        
        window.dispatchEvent(event);
    }
}