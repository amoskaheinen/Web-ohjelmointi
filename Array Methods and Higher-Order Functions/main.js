'use strict';

import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantRow, restaurantModal} from './components.js';

const tbody = document.getElementById('restaurant-table-body');
const dialog = document.getElementById('restaurant-modal');
const modalContent = document.getElementById('modal-content');
const closeBtn = document.getElementById('close-dialog');
const errorDiv = document.getElementById('error-message');
const filterButtons = document.querySelectorAll('#filters button');

let allRestaurants = [];

closeBtn.addEventListener('click', () => dialog.close());

const renderRestaurants = (restaurantsToRender) => {
  tbody.innerHTML = '';

  const trElements = restaurantsToRender.map((restaurant) => {
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
          <p style="color: red;">Menua ei voitu ladata. (Tarkista VPN-yhteys)</p>
        `;
      }
    });
    return tr;
  });

  trElements.forEach((tr) => tbody.appendChild(tr));
};

const init = async () => {
  try {
    errorDiv.textContent = ''; // Tyhjennetään mahd. vanhat virheet
    allRestaurants = await fetchData(`${baseUrl}/restaurants`);
    allRestaurants.sort((a, b) => a.name.localeCompare(b.name, 'fi'));

    renderRestaurants(allRestaurants);
  } catch (error) {
    console.error('Virhe ravintoloiden haussa:', error);
    errorDiv.textContent =
      'Ravintoloiden lataus epäonnistui. Varmista VPN-yhteys.';
  }
};

filterButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    try {
      const companyFilter = event.target.dataset.filter;

      if (companyFilter === 'All') {
        renderRestaurants(allRestaurants);
      } else {
        const filteredRestaurants = allRestaurants.filter(
          (restaurant) => restaurant.company === companyFilter
        );
        renderRestaurants(filteredRestaurants);
      }
    } catch (error) {
      console.error('Virhe suodatuksessa:', error);
      errorDiv.textContent = 'Tapahtui virhe ravintoloiden suodattamisessa.';
    }
  });
});

// Käynnistetään sovellus
init();
