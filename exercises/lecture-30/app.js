const waitingElement = document.getElementById("waiting");
const demoForm = document.getElementById("demoForm");
const demoElement = document.getElementById("demo");

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 10000));

  const firstName = demoForm.elements.firstName.value;
  const lastName = demoForm.elements.lastName.value;

  if (!firstName && !lastName) {
    waitingElement.textContent = "I'm miss You";
  } else {
    waitingElement.textContent = `Hello ${firstName} ${lastName}!`;

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhr.send();

    xhr.onload = () => {
      const response = JSON.parse(xhr.responseText);
      const posts = response.map(template).join("");
      demoElement.innerHTML = posts;
    };
  }
}

getData();
