const card = document.querySelector(".card");
const formData = document.querySelector(".form");
const Task = document.querySelector(".Task");
const addTask = (event) => {
  event.preventDefault();
  const currentForm = event.target;
  const userInput = currentForm.elements[0].value;
  if (userInput === "") {
    swal("ERROR", "Please enter something ", "error");
    return;
  } else {
    const ticket = createTicket(userInput);
    currentForm.reset();
    saveData();
  }
};
const form = formData;
form.addEventListener("submit", addTask);

const createTicket = (value) => {
  const newtask = document.createElement("p");
  const newText = document.createTextNode(value);
  newtask.appendChild(newText);
  const span = document.createElement("span");
  span.classList.add("icon");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-x");
  span.appendChild(icon);
  newtask.appendChild(span);
  Task.appendChild(newtask);
};

Task.addEventListener("click", function (e) {
  // Check if the clicked element has the class "fa-times" (delete icon)
  if (e.target.classList.contains("fa-times")) {
    // Remove the parent <p> element of the clicked icon
    e.target.parentElement.parentElement.remove(); // Assuming structure is <p> -> <span> -> <i>
    saveData(); // Save updated task list to localStorage after removal
  }
});

function saveData() {
  localStorage.setItem("data", Task.innerHTML);
}
function showData() {
  Task.innerHTML = localStorage.getItem("data");
}

showData();
