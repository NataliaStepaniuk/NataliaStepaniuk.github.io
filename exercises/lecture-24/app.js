const colors = ["blue", "green", "white"];

// Завдання 1
function iter(item) {
  console.log(item);
}

colors.forEach(iter);
// Завдання 2
function iter(item, index) {
  if (index === colors.length - 1) {
    console.log(`The last iteration! ${item} has index ${index}`);
  } else {
    console.log(`${item} has index ${index}`);
  }
}
colors.forEach(iter);
// Завдання 3
const letters = ["a", "b", "c"];

function iter(letter) {
  console.log(this === window);
}
letters.forEach(iter);
// Завдання 4
const Numbers = [22, 3, 4, 10];
let allEven = true;
Numbers.forEach(function (number) {
  if (number % 2 === 1) {
    allEven = false;
  }
});
console.log(allEven);
// Завдання 5

const allEvenTwo = numbers.every(function (number) {
  return number % 2 === 0;
});
console.log(allEven);
// Завдання 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex((fruit) => fruit === "blueberries");
console.log(index);
console.log(fruits[index]);

// Завдання 7
const arr = [7, 33, 47, 99, 2, 103, 79];

const found = array.find((element) => element > 10);
console.log(found);
// Завдання 8
const array = [1, 2, 3, 4, 5];

const even = (element) => element % 2 === 0;
console.log(array.some(even));
// Завдання 9
const numbers = [1, 30, 4, 21, 100000];

numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);
