'use strict';

let numerot = [];
let jatketaan = true;

while (jatketaan) {
  let syote = prompt("Enter a number (or 'done' to finish):");

  if (syote === 'done') {
    jatketaan = false;
  } else {
    numerot.push(Number(syote));
  }
}

let parilliset = [];

for (let luku of numerot) {
  if (luku % 2 === 0) {
    parilliset.push(luku);
  }
}

let tulosTeksti = '';

if (parilliset.length > 0) {
  tulosTeksti = 'Even Numbers: ' + parilliset.join(', ');
} else {
  tulosTeksti = 'Even Numbers: None';
}

document.getElementById('vastaus').innerHTML = tulosTeksti;

document.getElementById('vastaus').innerHTML += '<br>Program ended.';
