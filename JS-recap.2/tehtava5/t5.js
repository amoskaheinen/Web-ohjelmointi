'use strict';

function sortArray(numbers, order) {
  let uusiTaulukko = numbers.slice();

  if (order === 'asc') {
    uusiTaulukko.sort(function (a, b) {
      return a - b;
    });
  } else if (order === 'desc') {
    uusiTaulukko.sort(function (a, b) {
      return b - a;
    });
  }

  return uusiTaulukko;
}

const numerot = [5, 2, 8, 1, 9];

console.log(sortArray(numerot, 'asc'));

console.log(sortArray(numerot, 'desc'));

console.log('Alkuperäinen taulukko pysyi samana:', numerot);
