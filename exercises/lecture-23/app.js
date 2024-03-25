const alert = document.querySelector(".alert");
// Завдання 1
const buttonPrimary = document.querySelector(".btn-primary");
buttonPrimary.onclick = function () {
  alert.classList.add("alert-primary");
  alert.textContent = "A simple primary alert—check it out!";
};

// Завдання 2
const buttonSecondary = document.querySelector(".btn-secondary");
buttonSecondary.addEventListener("click", () => {
  alert.classList.add("alert-primary");
  alert.textContent = "A simple secondary alert—check it out!";
});
// Завдання 3
const buttonSuccess = document.querySelector(".btn-success");
buttonSuccess.addEventListener("mouseover", () => {
  alert.classList.add("alert-success");
  alert.textContent = "A simple success alert—check it out!";
});
buttonSuccess.addEventListener("mouseout", () => {
  alert.classList.remove("alert-success");
  alert.textContent = "";
});
// Завдання 4
const buttonDanger = document.querySelector(".btn-danger");
buttonDanger.addEventListener("focus", () => {
  alert.classList.add("alert-danger");
  alert.textContent = "A simple danger alert—check it out!";
});
buttonSuccess.addEventListener("focusout", () => {
  alert.classList.remove("alert-danger");
  alert.textContent = "";
});
// Завдання 5
const btnDark = document.querySelector(".btn-dark");
const btnLight = document.querySelector(".btn-light");

function toggleMode() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    btnDark.style.display = "none";
    btnLight.style.display = "block";
  } else {
    btnDark.style.display = "block";
    btnLight.style.display = "none";
  }
}

btnDark.addEventListener("click", toggleMode);
btnLight.addEventListener("click", toggleMode);
// Завдання 6
const btnInfo = document.querySelector(".btn-info");

btnInfo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    alert.classList.add("alert-info");
    alert.textContent = "A simple info alert—check it out!";
  }
});
// Завдання 7
const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
 let cardTitle = cards[i].querySelector(".card-title");
  console.log(cardTitle.textContent);
}
// Завдання 8
for (let i = 0; i < cards.length; i++) {
    let cardTitle = cards[i].querySelector(".card-title");
    let addToCartButton = cards[i].querySelector(".add-to-cart");
  
    addToCartButton.addEventListener("click", () => {
      console.log(cardTitle.textContent);
    });
  }