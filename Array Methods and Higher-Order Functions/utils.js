'use strict';

export const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP-virhe: ${response.status} - ${response.statusText}`);
  }
  return await response.json();
};
