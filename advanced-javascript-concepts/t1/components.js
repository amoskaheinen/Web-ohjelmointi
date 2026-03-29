'use strict';

export const restaurantRow = (restaurant) => {
  const {name, address} = restaurant; // Destructuring

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

  let menuHtml = '<ul>';

  courses.forEach((course) => {
    const {name: courseName, price, diets} = course;

    const formattedPrice = price ? price : '?€';
    const formattedDiets = diets ? `(${diets})` : '';

    menuHtml += `<li>${courseName}, ${formattedPrice}. ${formattedDiets}</li>`;
  });

  if (courses.length === 0) {
    menuHtml += '<li>Ei ruokalistaa tälle päivälle.</li>';
  }

  menuHtml += '</ul>';

  const htmlContent = `
    <h2>${name}</h2>
    <p><strong>Osoite:</strong> ${address}</p>
    <p><strong>Postinumero & Kaupunki:</strong> ${postalCode}, ${city}</p>
    <p><strong>Puhelin:</strong> ${phone || '-'}</p> <p><strong>Yritys:</strong> ${company}</p>
    <h3>Päivän menu</h3>
    ${menuHtml}
  `;

  return htmlContent;
};
