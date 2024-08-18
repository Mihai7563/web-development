console.log(' main js loaded');

const display = document.querySelector('#display');

document.addEventListener('keyup', (event) => {
    console.log('Key was pressed');
    console.log(event.key, event.keyCode);
    
    // if (event.keyCode < 37 || event.keyCode > 40) {
    //     display.style.backgroundImage = `url(img/undefined.svg)`
    // }
    // else{
    //     display.style.backgroundImage = `url(img/${event.key}.svg)`
    // }
    switch (event.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
            display.style.backgroundImage = `url(img/${event.key}.svg)`
            break;
    
        default:
            display.style.backgroundImage = `url(img/Undefined.svg)`
            break;
    }
})