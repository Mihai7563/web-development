console.log(' main.js working');

const map = {
    rows: 5,
    cols: 7,
    tiles: []
}

const player = {
    img: '',
    posX: 0,
    posY: 0,
};



const display = document.querySelector('.display');
display.style.gridTemplateColumns = `repeat(${map.cols}, 1fr)`

for (let i = 0; i < map.rows; i++) {
    map.tiles[i] = [];
    for (let j = 0; j < map.cols; j++) {
        let mapTile = document.createElement('div');
        mapTile.textContent = `${i}, ${j}`;
        mapTile.classList.add('map-tile');
        display.append(mapTile);
        map.tiles[i][j] = mapTile;
    } 
}

map.tiles[2][3].textContent = 'abc'

