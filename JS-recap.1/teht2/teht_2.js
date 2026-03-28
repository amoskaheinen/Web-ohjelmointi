'use strict';

let x1 = prompt('x1:');
let y1 = prompt('y1:');
let x2 = prompt('x2:');
let y2 = prompt('y2:');

let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

alert('Pisteiden välinen etäisyys on: ' + distance);
