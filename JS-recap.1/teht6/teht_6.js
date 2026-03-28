'use strict';

let luku = parseInt(prompt('Anna luku: '));

let taulukkoHTML = '<table>';

for (let i = 1; i <= luku; i++) {
  taulukkoHTML += '<tr>';
  for (let j = 1; j <= luku; j++) {
    taulukkoHTML += '<td>' + i * j + '</td>';
  }
  taulukkoHTML += '</tr>';
}

taulukkoHTML += '</table>';

document.getElementById('kertotaulu').innerHTML = taulukkoHTML;
