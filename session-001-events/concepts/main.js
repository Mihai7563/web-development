const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const input = document.querySelector('input');

// h1.addEventListener('click', () => {
//     console.log('Click even was triggered');
//     console.log(h1);
// })

// h2.addEventListener('click', () => {
//     console.log('Click even was triggered');
//     console.log(h2);
// })

const elems = [h1, h2, input]

for (let i = 0; i < elems.length; i++) {
    elems[i].addEventListener('keyup', handleEvent)
}

function handleEvent(e){
    console.log(e.type);
    console.log(e.target);
    console.log(e.key, e.keyCode);
}

document.addEventListener('keyup', handleEvent)