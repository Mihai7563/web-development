export const map = {};
export const player = {};
export const house = {};
export const pits = [];


export function initGame(mapRows = 10, mapCols = 15, numPits = 5){
    map.rows = mapRows;
    map.cols = mapCols;
    map.tiles = [];

    house.x = Math.floor(Math.random() * (map.cols - 1) + 1);
    house.y = Math.floor(Math.random() * (map.rows - 1) + 1);

    player.posX = 0;
    player.posY = 0;
    player.moves = 0;

    while (pits.length < numPits) {
        const pitX = Math.floor(Math.random() * (map.cols - 1) + 1);
        const pitY = Math.floor(Math.random() * (map.rows - 1) + 1);

        //ENSURES THAT THE PIT IS NOT AT THE SAME POSITION AS THE HOUSE OR ANOTHER PIT
        if((pitX != house.x && pitY != house.y) && (!pits.some(pit => pitX == pit.x && pitY == pit.y))){
            pits.push({x: pitX, y: pitY});
        }
    }
}


export function initUI(movesCounterDisplayElem, handleKeyUp){
    const display = document.querySelector('.display');
    display.innerHTML = '';

    movesCounterDisplayElem.textContent = '0';

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

    document.addEventListener('keyup', handleKeyUp);
}
