export class TurtleRaceGame {
  #players = [];
  constructor(raceName = "Unnamed race", rounds = 5) {
    this.raceName = raceName;
    this.rounds = rounds;
  }

  addPlayer(player) {
    this.#players.push(player);
  }

  listPlayers() {
    console.log(this.#players);
  }

  start() {
    console.log("");
    console.log(`%c 🏁${this.raceName} race begins❗🏁`, "font-weight: bold");
    console.log("----------------------------");

    for (let currentRound = 1; currentRound <= this.rounds; currentRound++) {
        this.newRound(currentRound);
    }
  }

  newRound(currentRound) {
    console.log("");
    console.log(`🐢🐢ROUND ${currentRound + 1} BEGINS🐢🐢`);

    this.#players.forEach((player) => {
      console.log("---------------------------");
      player.newRound();
      console.log(player.roundLog);
    });
  }

  
  get leaderboard(){
    return [...this.#players].sort((a, b) => b.score - a.score);
  }

  
  showWinner() {
    const maxScore = this.leaderboard[0].score;
    const winners = this.#players.filter((player) => player.score == maxScore);

    console.log("");
    console.log(`%c 🏆${this.raceName} results: 🏆`, "font-weight: bold");
    console.log("----------------------------");

    console.log(`WINNER${winners.length > 1 ? 'S' : ''}: ${winners.map(winner => winner.name).join(', ')}`);
  }

}
