console.log(' main.js working');

const map = {};

const house = {
    img: 'img/house.svg'
}

const player = {};

const pits = [];

const movesCounter = document.querySelector('#moves');

function initGame(mapRows = 10, mapCols = 15, numPits = 5){
    map.rows = mapRows;
    map.cols = mapCols;
    map.tiles = [];

    house.x = Math.floor(Math.random() * (map.cols - 1) + 1);
    house.y = Math.floor(Math.random() * (map.rows - 1) + 1);

    player.posX = 0;
    player.posY = 0;
    player.moves = 0;

    pits.length = 0;

    while (pits.length < numPits) {
        const pitX = Math.floor(Math.random() * (map.cols - 1) + 1);
        const pitY = Math.floor(Math.random() * (map.rows - 1) + 1);

        //ENSURES THE PIT IS NOT AT THE SAME POSITION AS THE HOUSE OR ANOTHER PIT
        if((pitX != house.x && pitY != house.y) && (!pits.some(pit => pitX == pit.x && pitY == pit.y))){
            pits.push({x: pitX, y: pitY});
        }
    }
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
    map.tiles[player.posY][player.posX].classList.add('map-tile-visited');
    
    map.tiles[house.y][house.x].classList.add('house');

    pits.forEach(pit => {
        map.tiles[pit.y][pit.x].classList.add('pit');
    })

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

    const endGameTitle = document.querySelector('.end-screen-card-header');
    const endScreen = document.querySelector('.end-screen');

    player.moves++;
    movesCounter.textContent = player.moves;
    if (pits.some(pit => pit.x == player.posX && pit.y == player.posY)) {
        endScreen.style.display = 'block';
        endGameTitle.style.color = '#781110';
        endGameTitle.textContent = 'Oh no! Harambe fell into a pit!';
        document.removeEventListener('keyup', handleKeyUp);
    }

    if(player.posX == house.x && player.posY == house.y){
        endScreen.style.display = 'block';
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
    initUI();
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