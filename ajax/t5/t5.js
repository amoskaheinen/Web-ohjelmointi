'use strict';

const tbody = document.getElementById('restaurant-table-body');
const dialog = document.getElementById('restaurant-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-dialog');
const errorDiv = document.getElementById('error-message');

closeBtn.addEventListener('click', () => {
  dialog.close();
});

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP-virhe: ${response.status} - ${response.statusText}`);
  }
  return await response.json();
}

async function renderRestaurants() {
  try {
    const apiUrl =
      'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';
    const restaurants = await fetchData(apiUrl);

    restaurants.sort((a, b) => a.name.localeCompare(b.name, 'fi'));

    restaurants.forEach((restaurant) => {
      const tr = document.createElement('tr');

      const tdName = document.createElement('td');
      tdName.textContent = restaurant.name;

      const tdAddress = document.createElement('td');
      tdAddress.textContent = restaurant.address;

      tr.appendChild(tdName);
      tr.appendChild(tdAddress);

      tr.addEventListener('click', async () => {
        document
          .querySelectorAll('#restaurant-table-body tr')
          .forEach((row) => row.classList.remove('highlight'));
        tr.classList.add('highlight');

        modalContent.innerHTML = '<p>Ladataan päivän menua...</p>';
        dialog.showModal();

        try {
          const menuUrl = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/fi`;
          const menuData = await fetchData(menuUrl);

          let menuHtml = '<ul>';
          if (menuData.courses && menuData.courses.length > 0) {
            menuData.courses.forEach((course) => {
              menuHtml += `<li>${course.name} - ${course.price || '-'}</li>`;
            });
          } else {
            menuHtml += '<li>Ei ruokalistaa tälle päivälle.</li>';
          }
          menuHtml += '</ul>';

          modalContent.innerHTML = `
                        <h2>${restaurant.name}</h2>
                        <p><strong>Osoite:</strong> ${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}</p>
                        <p><strong>Puhelin:</strong> ${restaurant.phone || '-'}</p>
                        <p><strong>Yritys:</strong> ${restaurant.company}</p>
                        <h3>Päivän menu</h3>
                        ${menuHtml}
                    `;
        } catch (error) {
          console.error('Virhe menun haussa:', error);
          modalContent.innerHTML = `
                        <h2>${restaurant.name}</h2>
                        <p style="color: red;">Menua ei voitu ladata. Tarkista verkkoyhteys (VPN).</p>
                    `;
        }
      });

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('Virhe ravintoloiden haussa:', error);
    errorDiv.textContent =
      'Ravintoloiden lataus epäonnistui. Varmista, että olet yhdistetty Metropolian VPN-verkkoon.';
  }
}

// Käynnistetään sovellus
renderRestaurants();
