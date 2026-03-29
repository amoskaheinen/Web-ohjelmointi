'use strict';

async function fetchUser() {
  try {
    const response = await fetch('https://reqres.in/api/users/1', {
      headers: {
        'x-api-key': 'reqres_08e922c8556d40d7833408ee491a41f4',
      },
    });

    const data = await response.json();
    console.log('Tehtävä 1 - GET:', data);
  } catch (error) {
    console.error('Virhe GET-pyynnössä:', error);
  }
}

fetchUser();
