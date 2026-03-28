'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log('Fruits: ' + fruits);

console.log('length of fruits: ' + fruits.length);

console.log('Element at index 2: ' + fruits[2]);

console.log('Last element of Fruits: ' + fruits[fruits.length - 1]);

const vegetables = [];

let input1 = prompt('Enter a vegetable (1):');
vegetables.push(input1);

let input2 = prompt('Enter a vegetable (2):');
vegetables.push(input2);

let input3 = prompt('Enter a vegetable (3):');
vegetables.push(input3);

console.log('Vegetables: ' + vegetables);

console.log('Length of vegetables: ' + vegetables.length);
