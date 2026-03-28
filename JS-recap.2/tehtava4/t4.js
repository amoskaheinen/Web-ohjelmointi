'use strict';

function sortArray(numerot) {
  let uusiTaulukko = numerot.slice().sort(function (a, b) {
    return a - b;
  });
  return uusiTaulukko;
}

let alkuperainen = [45, 2, 100, 8, 12, 1];

let jarjestetty = sortArray(alkuperainen);

console.log('Alkuperäinen taulukko:', alkuperainen);
console.log('Lajiteltu taulukko:', jarjestetty);
