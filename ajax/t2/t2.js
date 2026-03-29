'use strict';

async function createUser() {
  const newUser = {
    name: 'Matti Meikäläinen',
    job: 'Koodari',
  };

  try {
    const response = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: {
        'x-api-key': 'reqres_08e922c8556d40d7833408ee491a41f4',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });

    const data = await response.json();
    console.log('Tehtävä 2 - POST:', data);
  } catch (error) {
    console.error('Virhe POST-pyynnössä:', error);
  }
}

createUser();
