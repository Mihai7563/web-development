import { map, player, house, rocks, pits, crocodile, crocodileInterval, initGame, initUI } from "./game.js";

const movesCounter = document.querySelector('#moves');
const gorillaSense = document.querySelector('#gorilla-sense-indicator');
const endGameTitle = document.querySelector('.end-screen-card-header');

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
    if (moveY == -1 && (player.posY == 0 || rocks.some(rock => player.posY == rock.y + 1 && player.posX == rock.x))) {
        console.log("you can't go up");
        return;
    }

    // MOVE DOWN
    if (moveY == 1 && (player.posY == map.rows - 1 || rocks.some(rock => player.posY == rock.y - 1 && player.posX == rock.x)) ) {
        console.log("you can't go down");
        return;
    }

    // MOVE LEFT
    if (moveX == -1 && (player.posX == 0 || rocks.some(rock => player.posX == rock.x + 1 && player.posY == rock.y))) {
        console.log("you can't go left");
        return
    }
    

    // MOVE RIGHT
    if (moveX == 1 && (player.posX == map.cols - 1 || rocks.some(rock => player.posX == rock.x - 1 && player.posY == rock.y))) {
        console.log("you can't go right");
        return;
    }
    
    const [prevPosX, prevPosY] = [player.posX, player.posY];
    player.posX += moveX;
    player.posY += moveY;

    updateUI(map.tiles[prevPosY][prevPosX], map.tiles[player.posY][player.posX]);

    gorillaSense.textContent = 'NEUTRAL';
    gorillaSense.classList.remove('gorilla-sense-tingling');
    pits.forEach(pit => {
        if(
            (pit.x == player.posX && pit.y == player.posY + 1) || 
            (pit.x == player.posX && pit.y == player.posY - 1) || 
            (pit.y == player.posY && pit.x == player.posX + 1) || 
            (pit.y == player.posY && pit.x == player.posX - 1) 
            ){
                gorillaSense.textContent = 'PIT NEARBY';
                gorillaSense.classList.add('gorilla-sense-tingling');
            }        
    })
    
    const endScreen = document.querySelector('.end-screen');
    const endMoves = document.querySelector('#final-moves');

    player.moves++;
    movesCounter.textContent = player.moves;
    if (pits.some(pit => pit.x == player.posX && pit.y == player.posY)) {
        endScreen.style.display = 'block';
        endMoves.textContent = player.moves;
        endGameTitle.classList.add('end-screen-card-header-lose');
        endGameTitle.textContent = 'Oh no! Harambe fell into a pit!';
        document.removeEventListener('keyup', handleKeyUp);
        clearInterval(crocodileInterval);
    }

    if (crocodile.posX == player.posX && crocodile.posY == player.posY) {
        endScreen.style.display = 'block';
        endMoves.textContent = player.moves;
        endGameTitle.classList.add('end-screen-card-header-lose');
        endGameTitle.textContent = 'Oh no! Harambe was caught by the crocodile!';
        document.removeEventListener('keyup', handleKeyUp);
        clearInterval(crocodileInterval);
    }

    if(player.posX == house.x && player.posY == house.y){
        endScreen.style.display = 'block';
        endMoves.textContent = player.moves;
        endGameTitle.classList.add('end-screen-card-header-win');
        endGameTitle.textContent = 'You got Harambe home!';
        document.removeEventListener('keyup', handleKeyUp);
        clearInterval(crocodileInterval);
    }
}

function updateUI(previousTile, currentTile){
    previousTile.classList.remove('gorilla');    
    previousTile.textContent = player.moves;
    
    currentTile.classList.add('map-tile-visited');
    currentTile.classList.add('gorilla');
}

function moveCrocodile(){
    const directions = [
        {x: 0, y: -1}, //up
        {x: 0, y: 1}, //down
        {x: -1, y: 0}, //left
        {x: 1, y: 0} //right
    ];

    let newX, newY;
    let moved = false;

    while(moved == false){
        const direction = directions[Math.floor(Math.random() * directions.length)]
        newX = crocodile.posX + direction.x;
        newY = crocodile.posY + direction.y;

        if((newX >= 0 && newX < map.cols) &&
        (newY >= 0 && newX < map.rows) &&
        !rocks.some(rock => rock.x == newX && rock.y == newY) &&
        !pits.some(pit => pit.x == newX && pit.y == newY) &&
        !(house.x == newX && house.y == newY)
        ){
            crocodile.posX = newX;
            crocodile.posY = newY;
            console.log('The crocodile moved');
            moved = true;
            renderCrocodile();
        }
    }
}

function renderCrocodile(){
    document.querySelectorAll('.crocodile').forEach(tile => tile.classList.remove('crocodile'));
    map.tiles[crocodile.posY][crocodile.posX].classList.add('crocodile');
}

function newGame(){
    initGame(); 
    console.log(map);
    initUI(gorillaSense, movesCounter, handleKeyUp, moveCrocodile);
}

document.querySelector('#rules-btn').addEventListener('click', () => {
    document.querySelector('.rules-pop-up').style.display = 'block'
});

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.rules-pop-up').style.display = 'none';
    endGameTitle.classList.remove('end-screen-card-header-lose');
    endGameTitle.classList.remove('end-screen-card-header-win');
});


document.querySelector('#new-game-btn').addEventListener('click', newGame);
document.querySelector('#end-screen-btn').addEventListener('click', () => document.querySelector('.end-screen').style.display = 'none');
document.addEventListener('DOMContentLoaded', newGame);