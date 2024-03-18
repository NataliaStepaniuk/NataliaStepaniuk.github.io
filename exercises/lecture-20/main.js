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
  ingredients_eng: {
    gin: 6,
    vermouth: 1,
    oliveBrine: 1,
    olives: 4,
  },
  ingredients_fr: {
    gin: 170.4786,
    vermouth: 1,
    oliveBrine: 28.4131,
    olives: 4,
  },
  excuse_my_french() {
    return `  ingredients: 
    ${this.ingredients_fr.gin} ml de gin,  
    ${this.ingredients_fr.vermouth} trait de vermouth sec (0.0351951ml),
    ${this.ingredients_fr.oliveBrine} ml de saumure du pot d'olive,
    ${this.ingredients_fr.olives} olives vertes farcies`;
  },
  english_please() {
    return `ingredients: 
      ${this.ingredients_eng.gin} fluid ounces gin,  
      ${this.ingredients_eng.vermouth} dash dry vermouth (0.0351951ml), 
      ${this.ingredients_eng.oliveBrine} fluid ounce brine from olive jar,
      ${this.ingredients_eng.olives} stuffed green olives`;
  },
};

DirtyMartini.english_please();

DirtyMartini.excuse_my_french();
