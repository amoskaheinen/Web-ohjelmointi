'use strict';

let temperature = prompt('Anna lämpötila (Celsius):');

let fahrenheit = (temperature * 9) / 5 + 32;

let kelvin = temperature + 273.15;

document.getElementById('tekstikenttä').textContent =
  'Lämpötila Fahreinheitteina: ' +
  fahrenheit +
  '°F, Lämpötila Kelvineinä: ' +
  kelvin +
  'K';
