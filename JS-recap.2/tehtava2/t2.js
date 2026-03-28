'use strict';

const numbers = [];

for (let i = 0; i <= 5; i++) {
  const input = prompt('Enter number ' + (i + 1) + ':');
  const number = parseFloat(input);
  numbers.push(number);
}

console.log('Numbers:', numbers);

const input = parseFloat(prompt('Enter a number to search:'));

if (numbers.includes(input)) {
  console.log('Number' + input + ' is foundin the array.');
} else {
  console.log(input + ' is not in the array.');
}

numbers.pop();

console.log('Updated numbers:', numbers);

numbers.sort((a, b) => a - b);

console.log('Sorted numbers:', numbers);
