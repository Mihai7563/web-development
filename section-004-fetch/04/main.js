console.log('working');

const apiUrl = 'https://demo-api.siit.ro/api/authors';
const authorsList = document.querySelector('.container ul');


function displayAuthorsAsList(authors){
    // authors
    //     .map(author => {
    //         const li = document.createElement('li')
    //         li.innerText = author.name; 
    //         return li;
    //     })
    //     .forEach(li => authorsList.append(li));

    authorsList.innerHTML = authors
        .map(author => `<li>${author.name}</li>`)
        .join("");
}


function displayAuthorsAsCard(authors){
    authorsList.innerHTML = authors
        .map(author => `<div>
                            <h2>${author.name}</h2>
                            <small>(${author.created_at})</small>
                        </div>`)
        .join("");
}


function listAuthors(displayFunction){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayFunction(data))
}


function addAuthor(name){
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name})
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

function updateAuthor(id, name){
    fetch(`${apiUrl}/${id}`, {
        method: "PUT",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name: name})
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


function deleteAuthor(id){
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

listAuthors(displayAuthorsAsList);

// addAuthor('z');
// deleteAuthor(43);
updateAuthor(44, 'Octavian Goga')