console.log(' main.js working');

const map = {
    rows: 5,
    cols: 7,
    tiles: []
}

const house = {
    x: Math.floor(Math.random() * (map.cols - 1) + 1),
    y: Math.floor(Math.random() * (map.rows - 1) + 1),
    img: 'img/house.svg'
}

const player = {
    img: 'img/gorilla.svg',
    posX: 0,
    posY: 0,
    moves: 0
};

const display = document.querySelector('.display');
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

map.tiles[0][0].style.backgroundImage = `url(${player.img})`;

map.tiles[house.y][house.x].style.backgroundImage = `url(${house.img})`;
map.tiles[house.y][house.x].style.backgroundSize = 'cover';
map.tiles[house.y][house.x].style.backgroundPosition = 'center';

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            player.posY--;
            if (player.posY < 0) {
                player.posY = 0;
                console.log("you can't go there");
            }
            else{
                movePlayer(player.posY + 1, player.posX);  
            }               
            break;

        case 'ArrowDown':
            player.posY++;
            if (player.posY > map.rows - 1) {
                player.posY = map.rows - 1;
                console.log("you can't go there");
            }
            else{
                movePlayer(player.posY - 1, player.posX);  
            }     
            break;

        case 'ArrowLeft':
            player.posX--;
            if (player.posX < 0) {
                player.posX = 0;
                console.log("you can't go there");
            }
            else{
                movePlayer(player.posY, player.posX + 1);   
            }
            break;

        case 'ArrowRight':
            player.posX++;
            if (player.posX > map.cols - 1) {
                player.posX = map.cols - 1;
                console.log("you can't go there");
            }
            else{
                movePlayer(player.posY, player.posX - 1);
            }     
            break;
    
        default:
            break;
    }
})

function movePlayer(y, x){
    map.tiles[y][x].style.background = '#316F40';    

    map.tiles[player.posY][player.posX].style.backgroundImage = `url(${player.img})`;
    map.tiles[player.posY][player.posX].style.backgroundSize = 'cover';
    map.tiles[player.posY][player.posX].style.backgroundPosition = 'center';

    player.moves++;

    if(player.posX == house.x && player.posY == house.y){
        console.log(`You won in ${player.moves} moves!`);
    }
}