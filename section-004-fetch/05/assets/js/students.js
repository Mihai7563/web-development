import { apiUrl } from "./_common.js";
import { CrudFetch } from "./_crud-fetch.js";

console.log('Loaded');

const studentsContainer = document.querySelector('.list-container');
const studentForm = document.querySelector('#student-form');
const studentNameInput = document.querySelector('#student-name');
const studentEmailInput = document.querySelector('#student-email');
const studentPhoneInput = document.querySelector('#student-phone');
const studentFormInputs = document.querySelectorAll('#student-form .form-control');
const submitBtn = studentForm.querySelector("#add-student-button");
const errorFeedbackContainers = document.querySelectorAll(".invalid-feedback");

const studentsCrud = new CrudFetch(`${apiUrl}/students`);

function listStudents(students) {
  // DISPLAY IN HTML
  studentsContainer.innerHTML = students
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .map( (student,index) =>
            `<li class='students-list list-group-item list-group-item-action d-flex justify-content-between'>
                <span>${index + 1}. ${student.name}</span>
                <span>${student.email}</span>
                <span class="text-center">${student.phone ?? '-'}</span>
                <div>
                    <span class="edit me-2" data-bs-toggle="modal" data-bs-target="#editAuthor" data-author-id="${student.id}">✏️</span>
                    <span class="delete" data-bs-toggle="modal" data-bs-target="#deleteAuthor" data-author-id="${student.id}">&#128465;</span>
                </div>
            </li>`
    )
    .join("");
}


function loadStudentsList(){
  studentsCrud.getCollection(listStudents);
}

studentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  const requestPayload = {
    name: studentNameInput.value,
    email: studentEmailInput.value,
    phone: studentPhoneInput.value
  }

  studentsCrud.addResource(requestPayload, handleAddStudentResponse);
});


function clearErrorMessages() {
  studentFormInputs.forEach(input => input.classList.remove("is-invalid"));
}


function handleAddStudentResponse(data){
  submitBtn.disabled = false;
  clearErrorMessages();

  if (data.errors) {
    console.log(data.errors);
    displayErrorMessages(data.errors);
    return;
  }

  authorNameInput.value = '';
  authorsCrud.getCollection(listAuthors);
}


function displayErrorMessages(errors) {
  console.log(errors);
  Object.entries(errors).forEach(([key, value]) => {
    console.log(key, value);
  });

  
  // formField.classList.add("is-invalid");
  // feedbackContainer.innerText = msg.name[0];
}


loadStudentsList();
