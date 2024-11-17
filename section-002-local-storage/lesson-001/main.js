console.log('main.js working');

const usernameInput = document.querySelector('#username-input');
const numberInput = document.querySelector('#lucky-number-input');
const confirmBtn = document.querySelector('#confirm-btn');
const deleteBtn = document.querySelector('#delete-btn');
const usernameDisplay = document.querySelector('#username-display');
const numberDisplay = document.querySelector('#number-display');

const storedUserData = JSON.parse(localStorage.getItem("userData"));

usernameDisplay.textContent = storedUserData ? storedUserData.username : '';
numberDisplay.textContent = storedUserData ? storedUserData.number : '';

confirmBtn.addEventListener('click', () => {
    const userData = {
        username: usernameInput.value,
        number: numberInput.value
    }
    localStorage.setItem('userData', JSON.stringify(userData));

    usernameDisplay.textContent = userData.username;
    numberDisplay.textContent = userData.number;
})

deleteBtn.addEventListener('click', () => {
    localStorage.removeItem('userData');

    usernameDisplay.textContent = '';    
    numberDisplay.textContent = '';    
})

//save username and avatar and color / save the to-do list data 