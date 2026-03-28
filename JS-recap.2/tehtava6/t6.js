'use strict';

const numOfMovies = Number(prompt('Syötä elokuvien lukumäärä:'));

const movies = [];

for (let i = 0; i < numOfMovies; i++) {
  const nimi = prompt('Syötä elokuvan nimi:');
  const arvosana = Number(prompt('Syötä elokuvalle arvosana (1-5):'));

  movies.push({
    nimi: nimi,
    arvosana: arvosana,
  });
}

movies.sort(function (a, b) {
  return b.arvosana - a.arvosana;
});

document
  .querySelector('#suosikki')
  .insertAdjacentHTML('afterbegin', movies[0].nimi);

for (const movie of movies) {
  document.querySelector('#target').innerHTML +=
    `<li>${movie.nimi}, ${movie.arvosana}</li>`;
}
