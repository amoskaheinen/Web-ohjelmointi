'use strict';

let score = prompt('Your score:');

if (score <= 39) {
  alert('Grade: 0');
} else if (score >= 40 && score <= 51) {
  alert('Grade: 1');
} else if (score >= 52 && score <= 63) {
  alert('Grade: 2');
} else if (score >= 64 && score <= 75) {
  alert('Grade: 3');
} else if (score >= 76 && score <= 87) {
  alert('Grade: 4');
} else if (score >= 88 && score <= 100) {
  alert('Grade: 5');
} else {
  alert('Invalid score!');
}
