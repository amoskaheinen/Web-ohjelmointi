'use strict';

async function fetchError() {
  try {
    const response = await fetch('https://reqres.in/api/unknown/23', {
      headers: {
        'x-api-key': 'reqres_08e922c8556d40d7833408ee491a41f4',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP-virhe! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Data haettu onnistuneesti:', data);
  } catch (error) {
    console.error('Tehtävä 3 - Virhe napattu:', error.message);
  }
}

fetchError();
