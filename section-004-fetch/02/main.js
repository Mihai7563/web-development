console.log('working');
const container = document.querySelector('.img-container')

fetch("https://dog.ceo/api/breed/dachshund/images/random/6")
.then(response => response.json())
.then(data => {
    data.message.forEach(img => {
        container.innerHTML += `<div style="background-image: url(${img})"></div>`
    });
});

// select category and img number