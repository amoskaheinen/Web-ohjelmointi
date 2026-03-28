'use strict';

let luku = prompt('Anna positiivinen luku:');

if (luku > 0) {
  let summa = 0;
  for (let i = 1; i <= luku; i++) {
    console.log(i);
    summa += i;
  }
  document.getElementById('target').innerHTML = `Lukujen summa on: ${summa}`;
}
