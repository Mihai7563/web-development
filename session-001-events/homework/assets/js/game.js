export const map = {};
export const player = {};
export const house = {};
export const rocks = [];
export const pits = [];
export const crocodile = {};
export let crocodileInterval;

export function initGame(mapRows = 10, mapCols = 15, numPits = 5, numRocks = 7){
    map.rows = mapRows;
    map.cols = mapCols;
    map.tiles = [];

    house.x = Math.floor(Math.random() * (map.cols - 1) + 1);
    house.y = Math.floor(Math.random() * (map.rows - 1) + 1);

    player.posX = 0;
    player.posY = 0;
    player.moves = 0;

    rocks.length = 0;
    while (rocks.length < numRocks) {
        const rockX = Math.floor(Math.random() * (map.cols - 1) + 1);
        const rockY = Math.floor(Math.random() * (map.rows - 1) + 1);
        
        //ENSURES THAT THE ROCK IS NOT AT THE SAME POSITION AS THE HOUSE, ANOTHER PIT OR ANOTHER ROCK
        if((rockX != house.x && rockY != house.y) && (!pits.some(pit => rockX == pit.x && rockY == pit.y) && (!rocks.some(rock => rockX == rock.x && rockY == rock.y)))){
            rocks.push({x: rockX, y: rockY});
        }
    }
    
    pits.length = 0;
    while (pits.length < numPits) {
        const pitX = Math.floor(Math.random() * (map.cols - 1) + 1);
        const pitY = Math.floor(Math.random() * (map.rows - 1) + 1);

        //ENSURES THAT THE PIT IS NOT AT THE SAME POSITION AS THE HOUSE, ANOTHER PIT OR ANOTHER ROCK
        if((pitX != house.x && pitY != house.y) && (!pits.some(pit => pitX == pit.x && pitY == pit.y)) && (!rocks.some(rock => pitX == rock.x && pitY == rock.y))){
            pits.push({x: pitX, y: pitY});
        }
    }

    crocodile.posX = Math.floor(Math.random() * (map.cols - 1) + 1);
    crocodile.posY = Math.floor(Math.random() * (map.cols - 1) + 1);
}


export function initUI(gorillaSenseDisplayElem, movesCounterDisplayElem, handleKeyUp, moveCrocodile){
    const display = document.querySelector('.display');
    display.innerHTML = '';

    movesCounterDisplayElem.textContent = '0';

    gorillaSenseDisplayElem.textContent = 'NEUTRAL';

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
    });
    
    rocks.forEach(rock => {
        map.tiles[rock.y][rock.x].classList.add('rock');
    });
    map.tiles[crocodile.posY][crocodile.posX].classList.add('crocodile');
    
    document.addEventListener('keyup', handleKeyUp);
    crocodileInterval = setInterval(moveCrocodile, 1000);
}
