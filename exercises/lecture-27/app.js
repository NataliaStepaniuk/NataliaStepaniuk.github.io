// Завдання 1
const ul = document.querySelector("ul");
// Завдання 2
const input = document.querySelector("input");

let itemsArray = [];

if (localStorage.getItem("items") !== null) {
  itemsArray = JSON.parse(localStorage.getItem("items"));
}
// Завдання 3
function addTask(text) {
  const li = document.createElement("li");
  li.textContent = text;
  ul.appendChild(li);
}

// Завдання 4
itemsArray.forEach(addTask);
// Завдання 5
function add() {
  const text = input.value;
  itemsArray.push(text);
  localStorage.setItem("items", JSON.stringify(itemsArray));
  addTask(text);
  input.value = "";
}
// Завдання 6
function del() {
  localStorage.clear();
  itemsArray = [];
  ul.innerHTML = "";
}

document.querySelector("#add").addEventListener("click", add);
document.querySelector("#del").addEventListener("click", del);
