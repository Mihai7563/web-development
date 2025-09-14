console.log('working');

const apiUrl = 'https://demo-api.siit.ro/api/students';
const studentsList = document.querySelector('.container ul');


function displayStudentsAsList(students){
    studentsList.innerHTML = students
        .map(student => `<li>${student.name}</li>`)
        .join("");
}


function displayStudentsAsCards(students){
    studentsList.innerHTML = students
        .map(student => `<div>
                            <h2>${student.name}</h2>
                            <small>${student.email}</small>
                        </div>`)
        .join("");
}


function listStudents(displayFunction){
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayFunction(data))
}


function addStudent(student){
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(student)
    })
        .then(response => response.json())
        .then(data => console.log(data))
}


function deleteStudent(id){
    fetch(`${apiUrl}/${id}`, {
        method: "DELETE",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
}

listStudents(displayStudentsAsCards);

// addStudent({
//     name: 'Mihai',
//     email: 'mailmihai12@mihail.com'
// });

deleteStudent(65);