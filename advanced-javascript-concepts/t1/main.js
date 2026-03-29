'use strict';

import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tbody = document.getElementById('restaurant-table-body'); // Oletetaan, että HTML:ssä on tbody id:llä
const dialog = document.getElementById('restaurant-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-dialog');
const errorDiv = document.getElementById('error-message');

closeBtn.addEventListener('click', () => {
  dialog.close();
});

const renderRestaurants = async () => {
  try {
    const restaurants = await fetchData(`${baseUrl}/restaurants`);

    restaurants.sort((a, b) => a.name.localeCompare(b.name, 'fi'));

    restaurants.forEach((restaurant) => {
      const tr = restaurantRow(restaurant);

      tr.addEventListener('click', async () => {
        document
          .querySelectorAll('tr.highlight')
          .forEach((row) => row.classList.remove('highlight'));
        tr.classList.add('highlight');

        modalContent.innerHTML = '<p>Ladataan päivän menua...</p>';
        dialog.showModal();

        try {
          const menuData = await fetchData(
            `${baseUrl}/restaurants/daily/${restaurant._id}/fi`
          );

          modalContent.innerHTML = restaurantModal(restaurant, menuData);
        } catch (error) {
          console.error('Virhe menun haussa:', error);
          modalContent.innerHTML = `
            <h2>${restaurant.name}</h2>
            <p style="color: red;">Menua ei voitu ladata. (Tarkista VPN)</p>
          `;
        }
      });

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error('Virhe ravintoloiden haussa:', error);
    errorDiv.textContent =
      'Ravintoloiden lataus epäonnistui. Varmista VPN-yhteys.';
  }
};

// Käynnistetään sovellus
renderRestaurants();
