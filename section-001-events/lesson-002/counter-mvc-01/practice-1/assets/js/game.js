export class Game{
    constructor(players){
        this.players = players;
        this.startRandomEvents();
    }

    startRandomEvents(){
        setInterval(() => this.triggerRandomEvent(), 7000);
    }

    triggerRandomEvent(){
        console.log('new event started');
        const eventPos = Math.floor(Math.random() * this.events.length);
        const event = this.events[eventPos];
        event();
    }

    events = [
        () => this.doubleScore(),
        () => this.halfScore(),
        () => this.freezePlayer(),
        () => this.globalBoost(),
        () => this.globalPenalty()
    ];

    doubleScore() {
        const player = this.getRandomPlayer();
        player.score = player.score; // Double score
        this.showEventMessage(`${player.name}'s score has been doubled!`);
    }

    halfScore() {
        const player = this.getRandomPlayer();
        player.score = -Math.floor(player.score / 2); // Halve score
        this.showEventMessage(`${player.name}'s score has been halved!`);
    }

    freezePlayer() {
        const player = this.getRandomPlayer();
        this.showEventMessage(`${player.name} has been frozen for 8 seconds!`);
        player.freeze(8000); // Freeze player for 5 seconds
    }

    globalBoost() {
        this.players.forEach(player => player.score = 10); // Boost all scores
        this.showEventMessage('All players received a 10-point boost!');
    }

    globalPenalty() {
        this.players.forEach(player => player.score = -10); // Penalize all scores
        this.showEventMessage('All players lost 10 points!');
    }

    getRandomPlayer() {
        const position = Math.floor(Math.random() * this.players.length);
        return this.players[position];
    }

    showEventMessage(msg){
        const eventMsg = document.querySelector('.event-title');
        eventMsg.textContent = msg;
        setTimeout(() => eventMsg.textContent = '', 4000);
    }
}