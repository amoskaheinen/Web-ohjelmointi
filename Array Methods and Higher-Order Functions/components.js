'use strict';

export const restaurantRow = (restaurant) => {
  const {name, address} = restaurant;
  const tr = document.createElement('tr');
  tr.innerHTML = `
    <td>${name}</td>
    <td>${address}</td>
  `;
  return tr;
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses = []} = menu;

  const menuItemsHtml = courses
    .map((course) => {
      const {name: courseName, price, diets} = course;
      const formattedPrice = price ? price : '?€';
      const formattedDiets = diets ? `(${diets})` : '';
      return `<li>${courseName}, ${formattedPrice}. ${formattedDiets}</li>`;
    })
    .join('');

  const finalMenuHtml =
    courses.length > 0
      ? `<ul>${menuItemsHtml}</ul>`
      : '<p>Ei ruokalistaa tälle päivälle.</p>';

  return `
    <h2>${name}</h2>
    <p><strong>Osoite:</strong> ${address}</p>
    <p><strong>Postinumero & Kaupunki:</strong> ${postalCode}, ${city}</p>
    <p><strong>Puhelin:</strong> ${phone || '-'}</p>
    <p><strong>Yritys:</strong> ${company}</p>
    <h3>Päivän menu</h3>
    ${finalMenuHtml}
  `;
};
