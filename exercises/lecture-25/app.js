// Завдання 1
const list = ["html", "css", "javascript", "react.js"];
const ul = document.createElement("ul");

for (const item of list) {
  const li = document.createElement("li");
  li.textContent = item;
  ul.appendChild(li);
}

document.body.appendChild(ul);

// Завдання 2
const listWithHref = [
  { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { "react.js": "https://react.dev" },
];

const ol = document.createElement("ol");

listWithHref.forEach((item) => {
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.textContent = Object.keys(item)[0];
  a.href = Object.values(item)[0];

  li.appendChild(a);
  ol.appendChild(li);
});

document.body.appendChild(ol);

// Завдання 3
const students = [
  { firstName: "Tom", lastName: "Cat", degree: 230 },
  { firstName: "Nary", lastName: "Ann", degree: 336 },
  { firstName: "John", lastName: "Doe", degree: 400 },
  { firstName: "James", lastName: "Bond", degree: 700 },
];
function createTable() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["First Name", "Last Name", "Degree"];

  headers.forEach((column) => {
    const th = document.createElement("th");
    th.textContent = column;
    th.style.backgroundColor = "blue";
    th.style.color = "azure";
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  students.forEach((student) => {
    const row = document.createElement("tr");
    Object.values(student).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });

  table.appendChild(tbody);

  return table;
}

const studentsTable = createTable(students);
document.body.appendChild(studentsTable);
