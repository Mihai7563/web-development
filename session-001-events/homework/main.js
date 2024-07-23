console.log(' main.js working');

const map = {};

const house = {
    img: 'img/house.svg'
}

const player = {};

const movesCounter = document.querySelector('#moves');

function initGame(mapRows = 10, mapCols = 15){
    map.rows = mapRows;
    map.cols = mapCols;
    map.tiles = [];

    house.x = Math.floor(Math.random() * (map.cols - 1) + 1);
    house.y = Math.floor(Math.random() * (map.rows - 1) + 1);

    player.posX = 0;
    player.posY = 0;
    player.moves = 0;
}



function initUI(){
    const display = document.querySelector('.display');
    display.innerHTML = '';

    movesCounter.textContent = '0';

    display.style.gridTemplateColumns = `repeat(${map.cols}, 1fr)`;

    for (let i = 0; i < map.rows; i++) {
        map.tiles[i] = [];
        for (let j = 0; j < map.cols; j++) {
            let mapTile = document.createElement('div');
            // mapTile.textContent = `${j}, ${i}`;
            mapTile.classList.add('map-tile');
            display.append(mapTile);
            map.tiles[i][j] = mapTile;
        } 
    }
    map.tiles[player.posY][player.posX].classList.add('gorilla');

    map.tiles[house.y][house.x].classList.add('house');

    document.addEventListener('keyup', handleKeyUp);
}


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

    player.moves++;
    movesCounter.textContent = player.moves;
    if(player.posX == house.x && player.posY == house.y){
        document.removeEventListener('keyup', handleKeyUp)
        console.log(`You won in ${player.moves} moves!`);
    }
}

function updateUI(previousTile, currentTile){
    previousTile.classList.remove('gorilla');    
    previousTile.classList.add('map-tile-visited');
    previousTile.textContent = player.moves;

    currentTile.classList.add('gorilla');
}

function newGame(){
    initGame();
    initUI();
}

document.querySelector('#new-game-btn').addEventListener('click', newGame);
document.addEventListener('DOMContentLoaded', newGame);