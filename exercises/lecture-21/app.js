// Завдання 1

const fruits = 'apple banana cantaloupe blueberries grapefruit';

const fruitsArray = fruits.split(' ');

// Завдання 2

for (let i = 0; i < fruitsArray.length; i++) {
  console.log(fruitsArray[i]);
}

// Завдання 3
let v = 0;
while (v < fruitsArray.length) {
  console.log(fruitsArray[v]);
  v++;
}

// Завдання 4
let b = 0;
do {
  console.log(fruitsArray[b]);
  b++;
} while (b < fruitsArray.length);

// Завдання 5
for (const fruit of fruitsArray) {
  console.log(fruit);
}

// Завдання 6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < Numbs.length; i++) {
  if (Numbs[i] % 2 === 0) {
    console.log(Numbs[i]);
  }
}

// Завдання 7
const names = ['Batman'];
names.push('Joker');
console.log(names); // ['Batman', 'Joker']

// Завдання 8
{
const names = ['Batman'];
names.unshift('Joker');
console.log(names);
}
// Завдання 9
{
const names = ['Batman', 'Joker', 'Bane'];
names.unshift('Catwoman');
console.log(names);
}
// Завдання 10
{
const names = ['Batman', 'Joker', 'Bane'];
const newNames = ['Catwoman', ...names];
console.log(newNames); 
}
// Завдання 11
{
const names = ['Batman', 'Joker', 'Bane'];
names.splice(1, 0, 'Catwoman');
console.log(names);
}
// Завдання 12
{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    names.splice(1, 2);
    console.log(names);
}
// Завдання 13
{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    const ofCatwoman = names.indexOf('Catwoman');
    const ofJoker = names.indexOf('Joker');
    
    if (catwomanIndex !== -1 && jokerIndex !== -1) {
      names.splice(catwomanIndex, 2, 'Alfred');
  }
  
    console.log(names);
}
// Завдання 14
{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];

    if (!names.includes('Alfred')) {
        names.push('Alfred');
    }
    console.log(names);
}
// Завдання 15
{
    const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
    const ofAlfred = names.indexOf('Alfred');
    
    if (ofAlfred !== -1) {
        names.splice(ofAlfred, 1);
    }
    
    console.log(names);
}

