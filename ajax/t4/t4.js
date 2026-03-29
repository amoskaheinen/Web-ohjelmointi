'use strict';

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Virhe haettaessa dataa: ${response.status} - ${response.statusText}`
    );
  }

  return await response.json();
}

async function testFetchData() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres_08e922c8556d40d7833408ee491a41f4',
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);
    console.log('Tehtävä 4 - fetchData tulos:', userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

testFetchData();
