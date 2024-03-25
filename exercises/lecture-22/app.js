// №1
const h1Elements = document.querySelectorAll("h1");
console.log("Elements: " + typeof h1Elements);
console.log("length: " + h1Elements.length);

for (let i = 0; i < h1Elements.length; i++) {
  console.log(h1Elements[i]);
}
// №2
const firstP = document.querySelector("#p1");
firstP.style.backgroundColor = "gold";
// №3
const secondP = document.querySelector("#p2");
secondP.style.cssText = "background-color:gold; color: blue; font-size: 2rem;";
// №4
const thirdP = document.querySelector("#p3");
thirdP.classList.add("third");
// №5
const fourthP = document.querySelector("#p4");
fourthP.classList.add("fourth", "border");
// №6
const containers = document.querySelectorAll("container");

for (let i = 0; i < containers.length; i++) {
  const firstElement = containers[i].firstElementChild;
  console.log(firstElement);
}
// №7
for (let i = 0; i < containers.length; i++) {
  const firstElement = containers[i].firstElementChild;
  console.log(firstElement.textContent);
}
// №8
const headers = document.querySelectorAll(".container header");
const classes = ["first", "second", "third", "fourth"];

for (let i = 0; i < headers.length; i++) {
  let cName = headers[i].firstElementChild.classList;
  let idName = headers[i].firstElementChild.id;
  let innerText = headers[i].firstElementChild.innerText;

  if (i !== 0) {
    headers[i].innerHTML = `<h${
      i + 1
    } class='${cName}' id='${idName}'>${innerText}</h${i + 1}>`;
  }

  headers[i].firstElementChild.classList.add(classes[i]);
  console.log(headers[i]);
}

/*for (let i = 0; i < headers.length; i++) {
  const header = headers[i].querySelector("h" + (i + 1));
  if (header) {
    switch (i) {
      case 0:
        break;
      case 1:
        header.outerHTML = "<h2>" + header.innerHTML + "</h2>";
        break;
      case 2:
        header.outerHTML = "<h3>" + header.innerHTML + "</h3>";
        break;
      case 3:
        const originalId = header.getAttribute("id");
        const originalClass = header.getAttribute("class");
        header.outerHTML =
          '<h4 id="' +
          originalId +
          '" class="' +
          originalClass +
          '">' +
          header.innerHTML +
          "</h4>";
        break;
      default:
        break;
    }
  }
}

const classes = ["first", "second", "third", "fourth"];

for (let i = 0; i < headers.length; i++) {
  const header = headers[i].querySelector("h" + (i + 1));
  if (header) {
    header.classList.add(classes[i]);
  }
}*/
