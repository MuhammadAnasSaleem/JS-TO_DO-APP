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
    console.log("addtask bhi chalraha hai");
  }
};
const form = formData;
form.addEventListener("submit", addTask);

const createTicket = (value) => {
  // const newtask = document.createElement("p");
  // const newText = document.createTextNode(value);
  // newtask.appendChild(newText);
  // const span = document.createElement("span");
  // span.classList.add("icon");
  // const icon = document.createElement("i");
  // icon.classList.add("fa-solid", "fa-x");
  // span.appendChild(icon);
  // newtask.appendChild(span);
  // Task.appendChild(newtask);
  const newDiv = document.createElement("div");
  const newtask = document.createElement("p");
  const newText = document.createTextNode(value);
  const newSpan = document.createElement("span");
  const icon = document.createElement("i");
  icon.classList.add("fa-solid", "fa-x");
  newSpan.appendChild(icon);
  // const newImg = document.createElement("img");
  // newImg.setAttribute("src", "./images/ximage.jpg");
  // newSpan.appendChild(newImg);
  newDiv.classList.add("ticket");
  newtask.appendChild(newText);
  newDiv.appendChild(newtask);
  newDiv.appendChild(newSpan);
  Task.appendChild(newDiv);
  console.log("addticket working");
};
const removeTicket = (e) => {
  if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove();
    saveData();
    console.log("removeticket working");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
    saveData();
  }
};
Task.addEventListener("click", removeTicket);
function saveData() {
  localStorage.setItem("data", Task.innerHTML);
}
function showData() {
  Task.innerHTML = localStorage.getItem("data");
}

showData();
