const form = document.getElementById("myForm");
const input = document.getElementById("title");
const todoLane = document.getElementById("todo-lane");

const openFormButton = document.getElementById("openFormButton");
const formContainer = document.getElementById("formContainer");
const formOverlay = document.getElementById("formOverlay");

openFormButton.addEventListener("click", function() {
  formContainer.classList.add("open"); 
});

openFormButton.addEventListener("click", function() {
  formOverlay.style.display = "block"; 
});



form.addEventListener("submit", function(event) {
  event.preventDefault();
  formOverlay.style.display = "none"; 
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
    const payload = new URLSearchParams(formData);
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))
  const value = input.value;

  if (!value) return;

  const newTask = document.createElement("div");
  newTask.classList.add("task");
  newTask.setAttribute("draggable", "true");
  newTask.innerText = value;

  const taskTitle = document.createElement("p");
  newTask.classList.add("task-title");

  newTask.addEventListener("dragstart", () => {
    newTask.classList.add("is-dragging");
  });

  newTask.addEventListener("dragend", () => {
    newTask.classList.remove("is-dragging");
  });

  todoLane.appendChild(newTask);

  input.value = "";



  
    
  
});








// (function() {
//     form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     const formData = new FormData(form);
//     const payload = new URLSearchParams(formData);
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: payload,
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
//     })
//     })();