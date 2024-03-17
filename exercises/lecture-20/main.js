/* Завдання 1 */
const person = {
  name: "Viktor",
  age: 30,
};
console.log(person);
console.log("Name:", person.name);
console.log("Age:", person.age);
/* Завдання 2 */
const person1 = {
  name: "Viktor",
  age: 30,
};
person1.name = {
  firstName: "Viktor",
  lastName: "Sidorenko",
};
console.log("FirstName:", person.name.firstName);
console.log("LastName:", person.name.lastName);

/* Завдання 3 */
const newPerson = {
  firstName: "Viktor",
  lastName: "Sidorenko",
  age: 30,

  bio() {
    console.log(`FirstName: ${this.firstName}`);
    console.log(`LastName: ${this.lastName}`);
    console.log(`Age: ${this.age}`);
  },
};
newPerson.bio();

/* Завдання 4 */
const newPerson1 = {
  firstName: "Viktor",
  lastName: "Sidorenko",
  age: 30,
  introduceSelf() {
    console.log(`Hi! I'm ${this.firstName}.`);
  },
};
newPerson1.introduceSelf();

/* Завдання 5 */
function createPerson(name) {
  return {
    name: name,

    introduceSelf() {
      console.log(`Hi! I'm ${this.name}.`);
    },
  };
}

const person1 = createPerson("Victor");
const person2 = createPerson("Helga");

person1.introduceSelf();
person2.introduceSelf();

/* Завдання 6 */
function Person(name) {
  this.name = name;

  this.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
}

const mary = new Person("Mary");
const tom = new Person("Tom");

console.log(`Чи містить mary "prop"? ${mary.hasOwnProperty("prop")}`);

mary.introduceSelf();
tom.introduceSelf();
/* Завдання 7 */
const DirtyMartini = {
  ingredients: {
    gin: "6 fluid ounces",
    vermouth: "1 dash",
    oliveBrine: "1 fluid ounce",
    olives: "4 stuffed green olives",
  },
  english_please: function () {
    console.log("ingredients:");
    for (let [key, value] of Object.entries(this.ingredients)) {
      console.log(`${key}: ${value}`);
    }
  },
  excuse_my_french: function () {
    console.log("ingrédients:");
    for (let [key, value] of Object.entries(this.ingredients)) {
      if (key === "vermouth") {
        value = "1 trait de vermouth sec (0.0351951ml)";
      }
      console.log(`${value}: ${key}`);
    }
  },
};

DirtyMartini.english_please();

DirtyMartini.excuse_my_french();
