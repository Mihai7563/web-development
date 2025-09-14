import { CrudFetch } from "./_crud-fetch.js";
import { showPreloader, hidePreloader } from "./_common.js";
const authorsContainer = document.querySelector("#authors-container");

const authorsForm = document.querySelector("#authors-form");
const authorNameInput = document.querySelector("#author-name");
const submitBtn = authorsForm.querySelector("#add-author-button");
const errorFeedbackContainer = document.querySelector("#add-invalid-feedback");

const bsEditModal = document.getElementById('editAuthor')
const editErrorFeedbackContainer = document.querySelector("#edit-invalid-feedback");
const editAuthorInput = document.querySelector("#edit-author-name");
const confirmEditBtn = document.querySelector("#confirm-edit-btn");

const confirmDeleteBtn = document.querySelector("#confirm-delete-btn");

const apiUrl = "https://demo-api.siit.ro/api";

const authorsCrud = new CrudFetch(`${apiUrl}/authors`)

// ADD CLICK EVENT LISTENER FOR EDIT POPUP 
confirmEditBtn.addEventListener('click', () => {
  const authorId = confirmEditBtn.getAttribute('data-author-id');
  showPreloader(authorsContainer);
  authorsCrud.editResource(authorId, { name: editAuthorInput.value }, handleEditAuthorResponse);
});


// ADD CLICK EVENT LISTENER FOR EDIT POPUP 
confirmDeleteBtn.addEventListener("click", () => {
  const authorId = confirmDeleteBtn.getAttribute('data-author-id');
  showPreloader(authorsContainer);
  authorsCrud.deleteResource(authorId, handleDeleteAuthorResponse)
});


function listAuthors(authors) {
  // DISPLAY IN HTML
  authorsContainer.innerHTML = authors
    .sort((a, b) => (a.name < b.name ? -1 : 1))
    .map( (author,index) =>
            `<li class='list-group-item list-group-item-action d-flex justify-content-between'>
                <span>${index + 1}. ${author.name}</span>
                <div>
                    <span class="edit me-2" data-bs-toggle="modal" data-bs-target="#editAuthor" data-author-id="${author.id}">✏️</span>
                    <span class="delete" data-bs-toggle="modal" data-bs-target="#deleteAuthor" data-author-id="${author.id}">&#128465;</span>
                </div>
            </li>`
    )
    .join("");
    
  // ADD EVENT LISTENERS FOR EDIT
  Array.from(document.querySelectorAll(".edit")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const authorId = e.target.getAttribute("data-author-id");
      confirmEditBtn.setAttribute('data-author-id', authorId);
      editAuthorInput.value = authors.find(author => author.id == authorId).name;
    })
  });
  
  // ADD EVENT LISTENERS FOR DELETE
  Array.from(document.querySelectorAll(".delete")).forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const authorId = e.target.getAttribute("data-author-id");
      confirmDeleteBtn.setAttribute('data-author-id', authorId);
      document.querySelector(".author-name-span").textContent = authors.find((author) => author.id == authorId).name;
    });
  });

  hidePreloader(authorsContainer);
}


// ADD EVENT LISTENER FOR ADD
authorsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  submitBtn.disabled = true;
  authorsCrud.addResource({ name: authorNameInput.value }, handleAddAuthorResponse);
});


function displayErrorMessages(msg, formField, feedbackContainer) {
  formField.classList.add("is-invalid");
  feedbackContainer.innerText = msg.name[0];
}


function clearErrorMessages() {
  authorNameInput.classList.remove("is-invalid");
}


function handleAddAuthorResponse(data){
  submitBtn.disabled = false;
  clearErrorMessages();

  if (data.errors) {
    displayErrorMessages(data.errors, authorNameInput, errorFeedbackContainer);
    return;
  }

  authorNameInput.value = '';
  authorsCrud.getCollection(listAuthors);
}


function handleDeleteAuthorResponse(response){
  if (response.status == 204) {
    authorsCrud.getCollection(listAuthors);
    return;
  } 
  console.error("Delete failed");
}


function handleEditAuthorResponse(data){
  clearErrorMessages();
  
  if (data.errors) {
    displayErrorMessages(data.errors, editAuthorInput, editErrorFeedbackContainer);
    return;
  }
  
  authorsCrud.getCollection(listAuthors);
  
  bootstrap.Modal.getInstance(bsEditModal).hide();
}

function loadAuthorsList(){
  showPreloader(authorsContainer);
  authorsCrud.getCollection(listAuthors);
}

loadAuthorsList();
