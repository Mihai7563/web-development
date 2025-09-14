import { apiUrl, showPreloader, hidePreloader } from "./_common.js";
import { CrudFetch } from "./_crud-fetch.js";

const studentsContainer = document.querySelector('#student-container');
const studentForm = document.querySelector('#student-form');
const studentNameInput = document.querySelector('#student-name');
const studentEmailInput = document.querySelector('#student-email');
const studentPhoneInput = document.querySelector('#student-phone');
const studentFormInputs = document.querySelectorAll('#student-form .form-control');
const submitBtn = studentForm.querySelector("#add-student-button");

const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");

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
                    <!-- <span class="edit me-2" data-bs-toggle="modal" data-bs-target="#editStudent" data-student-id="${student.id}">✏️</span> -->
                    <span class="delete" data-bs-toggle="modal" data-bs-target="#deleteStudent" data-student-id="${student.id}">&#128465;</span>
                </div>
            </li>`
    )
    .join("");


  Array.from(document.querySelectorAll(".delete")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const studentId = e.target.getAttribute("data-student-id");
      confirmDeleteBtn.setAttribute('data-student-id', studentId);
      document.querySelector(".student-name-span").textContent = students.find((student) => student.id == studentId).name;
    });
  });

  hidePreloader(studentsContainer);
}


function loadStudentsList(){
  studentsCrud.getCollection(listStudents);
  showPreloader(studentsContainer);
}


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
  
  emptyStudentFormInput(studentFormInputs);
  studentsCrud.getCollection(listStudents);
}


function handleDeleteStudentResponse(response){
  if (response.status == 204) {
    studentsCrud.getCollection(listStudents);
    return;
  } 
  console.error("Delete failed");
}




function displayErrorMessages(errors) {
  console.log(errors);
  Object.entries(errors).forEach(([key, value]) => {
    const formField = document.querySelector(`#student-${key}`)
    formField.classList.add("is-invalid");

    const formErrorField = document.querySelector(`#student-${key}-error`);
    formErrorField.textContent = value[0];
  });
}


function emptyStudentFormInput(formInputs = []){
  formInputs.forEach(formInput => formInput.value = '');
}


// ADD CLICK EVENT LISTENER FOR DELETE POPUP 
confirmDeleteBtn.addEventListener("click", () => {
  const studentId = confirmDeleteBtn.getAttribute('data-student-id');
  showPreloader(studentsContainer);
  studentsCrud.deleteResource(studentId, handleDeleteStudentResponse)
});


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



loadStudentsList();
