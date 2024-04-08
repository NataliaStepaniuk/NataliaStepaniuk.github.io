const errorMessages = document.getElementById("errorMessages");

function displayError(message) {
  errorMessages.innerHTML += `<div class="error">${message}</div>`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPassword(password) {
  return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(password);
}

const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const { username, email, password } = registrationForm.elements;

  errorMessages.innerHTML = "";

  if (!username.value.trim()) {
    displayError("Поле з ім'ям є обов'язковим.");
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    displayError("Введіть дійсну адресу електронної пошти.");
    return;
  }

  if (!password.value.trim() || !isValidPassword(password.value)) {
    displayError("Введіть дійсний пароль, який відповідає вимогам.");
    return;
  }

  

  registrationForm.reset();
  errorMessages.innerHTML = "<div class='success'>Реєстрація успішна!</div>";
});
