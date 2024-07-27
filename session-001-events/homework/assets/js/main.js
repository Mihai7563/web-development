import { map, player, house, pits, initGame, initUI } from "./game.js";

const movesCounter = document.querySelector('#moves');

console.log(' main.js working');


function handleKeyUp(event){
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(-1, 0);           
            break;

        case 'ArrowDown':
            movePlayer(1, 0);  
            break;

        case 'ArrowLeft':
            movePlayer(0, -1);
            break;

        case 'ArrowRight':
           movePlayer(0, 1);
            break;
    
        default:
            break;
    }
}


function movePlayer(moveY, moveX){
    // MOVE UP
    if (moveY == -1 && player.posY == 0) {
        console.log("you can't go up");
        return;
    }

    // MOVE DOWN
    if (moveY == 1 && player.posY == map.rows - 1) {
        console.log("you can't go down");
        return;
    }

    // MOVE LEFT
    if (moveX == -1 && player.posX == 0) {
        console.log("you can't go left");
        return
    }
    

    // MOVE RIGHT
    if (moveX == 1 && player.posX == map.cols - 1) {
        console.log("you can't go right");
        return;
    }
    
    const [prevPosX, prevPosY] = [player.posX, player.posY];
    player.posX += moveX;
    player.posY += moveY;

    updateUI(map.tiles[prevPosY][prevPosX], map.tiles[player.posY][player.posX]);

    const endGameTitle = document.querySelector('.end-screen-card-header');
    const endScreen = document.querySelector('.end-screen');
    const endMoves = document.querySelector('#final-moves');

    player.moves++;
    movesCounter.textContent = player.moves;
    if (pits.some(pit => pit.x == player.posX && pit.y == player.posY)) {
        endScreen.style.display = 'block';
        endMoves.textContent = player.moves;
        endGameTitle.style.color = '#781110';
        endGameTitle.textContent = 'Oh no! Harambe fell into a pit!';
        document.removeEventListener('keyup', handleKeyUp);
    }

    if(player.posX == house.x && player.posY == house.y){
        endScreen.style.display = 'block';
        endMoves.textContent = player.moves;
        endGameTitle.style.color = '#356041';
        endGameTitle.textContent = 'You got Harambe home!'
        document.removeEventListener('keyup', handleKeyUp);
    }
}

function updateUI(previousTile, currentTile){
    previousTile.classList.remove('gorilla');    
    previousTile.textContent = player.moves;
    
    currentTile.classList.add('map-tile-visited');
    currentTile.classList.add('gorilla');
}

function newGame(){
    document.querySelector('.end-screen').style.display = 'none';
    initGame(); 
    console.log(map);
    initUI(movesCounter, handleKeyUp);
}

document.querySelector('#rules-btn').addEventListener('click', () => {
    document.querySelector('.rules-pop-up').style.display = 'block'
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.rules-pop-up').style.display = 'none'
});


document.querySelector('#new-game-btn').addEventListener('click', newGame);
document.querySelector('#end-screen-btn').addEventListener('click', newGame);
document.addEventListener('DOMContentLoaded', newGame);