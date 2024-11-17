const title = document.querySelector('.name');
const icon = document.querySelector('.icon');
const nameInput = document.querySelector('.name-input');
const colorInput = document.querySelector('.color-input');
const confirmBtn = document.querySelector('.confirm-btn');

const storedUserData = JSON.parse(localStorage.getItem('userData'));

title.textContent = storedUserData ? storedUserData.name : 'Username';
icon.style.backgroundColor = storedUserData ? storedUserData.color : 'red';

confirmBtn.addEventListener('click', () => {
    console.log('clicked');

    const userData = {
        name: nameInput.value,
        color: colorInput.value
    }

    localStorage.setItem('userData', JSON.stringify(userData));

    title.textContent = userData.name;
    icon.style.backgroundColor = userData.color;
})
