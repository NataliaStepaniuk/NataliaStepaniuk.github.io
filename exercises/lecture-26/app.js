// Завдання 1
function calculate(operation, value, numbers) {
    let result = value;
    for (const number of numbers) {
      result = operation(result, number);
    }
    return result;
  }
  function sum(a1, a2) {
    return a1 + a2;
  }
  function multiply(a1, a2) {
    return a1 * a2;
  }
  console.log(calculate(sum, 0, [1, 2, 4])); 
  console.log(calculate(multiply, 1, [1, 2, 4])); 
  
// Завдання 2
let student_names = ["Wick", "Malcolm", "Smith"]

student_names.map((name, index,) => {
  console.log(`name: ${name} | index: ${index} | array: ${student_names}`);
});
// Завдання 3
​let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
let maxDegree= 600;

students_information.map((student) => {
  const percentage = (student.degree / maxDegree) * 100;
  console.log({ ...student, persent });
});

// Завдання 4
const array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const flatArray = array.reduce((accum, value) => {
  return accum.concat(value);
}, []);
console.log(flatArray);
// Завдання 5
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
Array.prototype.upperCase = function () {
    for (let i = 0; i < this.length; i++) {
      this[i] = this[i].toUpperCase();
    }
  };

  arr.upperCase();
  console.log(arr);

myFunc(); // [ 'ALGORITHM', 'DATA STRUCTURE', 'OPERATING SYSTEM', 'HTML' ]