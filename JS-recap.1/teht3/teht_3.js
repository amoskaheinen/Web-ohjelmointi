'use strict';

let luvut = prompt('Anna kolme lukua pilkulla erotettuna:');

let luvutArray = luvut.split(',').map(Number);

// kaikki sivut yhtä suuret
if (luvutArray[0] === luvutArray[1] && luvutArray[1] === luvutArray[2]) {
  alert('equilateral.');
  // kaksi sivua yhtä suuret
} else if (
  luvutArray[0] === luvutArray[1] ||
  luvutArray[1] === luvutArray[2] ||
  luvutArray[0] === luvutArray[2]
) {
  alert('isosceles.');
  // kaikki sivut eri pituiset
} else {
  alert('scalene.');
}
