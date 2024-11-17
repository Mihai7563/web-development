import { HolyPlayer } from "./holy-player.js";

const players = [
    new HolyPlayer('Mercurie', 'Doamne ajuta'),
    new HolyPlayer('Nectarie', 'Zi, maica, bodaproste', 'Trasni-te-ar deavole!'),
    new HolyPlayer('Elefterie', 'Mai mare sus', 'Pisici!!!'),
    new HolyPlayer('Haralambie', 'Moarte pacatosilor', 'El nu va moare')
];

for (let round = 0; round < 10; round++) {
    console.log('');
    console.log(`⚔️⚔️ROUND ${round + 1} BEGINS⚔️⚔️`);
    players.forEach(player => {
        console.log('------------------');
        console.log(`${player.name} taunts: ${player.taunt}!!!`);
        
        const roundScore = player.newRound();
        console.log(`${player.name} rolled ${roundScore}. New score: ${player.score}`);
    })
}



//TODO TURTLE CLASS AND A LUCKY TURTLE CLASS THAT EXTENDS IT, THAT HAS A LUCKY NUMBER (IF THE DICE HITS ITS LUCKY NUMBER, IT DOUBLES)