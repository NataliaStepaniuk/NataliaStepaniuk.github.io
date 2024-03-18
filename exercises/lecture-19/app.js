/* Завдання 1*/

let str1 = 'I\'m a string!';
let str2 = "I'm a string!";
//Перевірка на довжину рядка
let equallength = str1.length === str2.length;
console.log("Equallength", equallength)// Рядки рівні

// Перевірка на строгу рівність
let strictEquality = str1 === str2;
console.log("Strict equality:", strictEquality);

// Перевірка на недбалу рівність
let looseEquality = str1 == str2;
console.log("Loose equality:", looseEquality);

/* Завдання 2*/
let string5 = "Hello World";
let firstChar = string5[0];
let firstChar1 = string5.charAt(0);

console.log(firstChar); // 'H'
console.log(firstChar1); // 'H'
/* Завдання 3*/
let str3 = "Hello Javascript";

let symbolJ = str3.charAt(8);

console.log(symbolJ); // "J"

/* Завдання 4*/
//Method 1
let str4 = "Hello World!";

let lastChar1 = str4[str4.length - 1];

console.log(lastChar1);

//Method 2
let str5 = "Hello World!";

let lastChar2 = str5.slice(-1);

console.log(lastChar2);

/* Завдання 5*/
//Method 1
function lastChar(str) {
  return str[str.length - 1];
}

let str6 = "Hello World!";

let lastChar = lastChar(str6);

console.log(lastChar);
//Method 2
function lastChar(str) {
  return str.slice(-1);
}

let str7 = "Hello World!";

let lastChar = lastChar(str7);

console.log(lastChar);
//Method 3
function lastChar(str) {
  return str.charAt(str.length - 1);
}

let str8 = "Hello World!";

let lastChar = lastChar(str8);

console.log(lastChar);

/* Завдання 6*/

let a = "When candles are out,";
let b = "all cats are grey.";
let c = a.concat(b);
console.log(c); // "When candles are out, all cats are grey."

/* Завдання 7*/
let fact = "Fifteen is the same as";
let a1 = 5;
let b1 = 10;

fact = `${fact} ${a1 + b1}`;

console.log(fact);

/* Завдання 8*/
let firstName = "Tom";
let lastName = "Cat";
function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}
console.log(getFullName(firstName, lastName)); // "Tom Cat"
/* Завдання 9*/
function greeting(firstName, lastName) {
  return `Hello, ${getFullName(firstName, lastName)}!`;
}
/* Завдання 10*/

let template = `<div><h1>Hello, ${greeting(firstName, lastName)}!</h1></div>`;
console.log(template); // Результат: <div><h1>Hello, Tom Cat!</h1></div>

/* Завдання 11*/
let string1 = "  The name of our game  ";
console.log(string1.trim()); // "The name of our game"
console.log(string1.trimStart()); // "The name of our game  "
console.log(string1.trimEnd()); // "  The name of our game"

const phoneNumber = "\t  555-123\n ";
let result1 = phoneNumber.trim();
console.log(result1); // Результат: '555-123'
let result2 = phoneNumber.trimStart();
console.log(result2); // Результат: '555-123\n '
/* Завдання 12*/
let sentence = "Always look on the bright side of life";

console.log(sentence.includes("look up")); // false

console.log(sentence.includes("look on")); // true

console.log(sentence.includes("look on", 8)); // true

/* Завдання 13*/
let sentence1 = "Always look on the bright side of life";
console.log(sentence.indexOf("l"));
console.log(sentence.indexOf("l", 3));
console.log(sentence.indexOf("L"));

/* Завдання 14*/
let sentence2 = "Always look on the bright side of life";
const Sentence = sentence.slice(7);
console.log(Sentence);

const startSentence = sentence.slice(0, 6);
console.log(startSentence);

const firstWord = sentence.slice(0, 4);
console.log(firstWord);
/* Завдання 15*/
const userName = /^[a-z0-9_-]{8,16}$/i;

/* Завдання 16*/
const regexEmail = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
/* Завдання 17*/
let sentenceTask17 =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";

function truncateText(str) {
  return str.substring(0, 50);
}

function truncateTextNew(str) {
  return str.substr(0, 50);
}
