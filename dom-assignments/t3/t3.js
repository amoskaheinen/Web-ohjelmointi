'use strict';

function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browserName = 'Tuntematon selain';
  let browserVersion = '';

  if (ua.includes('Firefox')) {
    browserName = 'Mozilla Firefox';
    browserVersion = ua.split('Firefox/')[1];
  } else if (ua.includes('Edg')) {
    browserName = 'Microsoft Edge';
    browserVersion = ua.split('Edg/')[1].split(' ')[0];
  } else if (ua.includes('Chrome')) {
    browserName = 'Google Chrome';
    browserVersion = ua.split('Chrome/')[1].split(' ')[0];
  } else if (ua.includes('Safari') && !ua.includes('Chrome')) {
    browserName = 'Apple Safari';
    browserVersion = ua.split('Version/')[1].split(' ')[0];
  }

  const majorVersion = browserVersion
    ? browserVersion.split('.')[0]
    : 'Tuntematon';
  return `${browserName}, ${majorVersion}`;
}

function getOS() {
  const ua = navigator.userAgent;
  if (ua.includes('Win')) return 'Windows';
  if (ua.includes('Mac')) return 'MacOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('like Mac')) return 'iOS';
  return 'Tuntematon käyttöjärjestelmä';
}

const now = new Date();

const dateOptions = {day: 'numeric', month: 'long', year: 'numeric'};
const formattedDate = now.toLocaleDateString('fi-FI', dateOptions);

const timeOptions = {hour: '2-digit', minute: '2-digit'};
const formattedTime = now.toLocaleTimeString('fi-FI', timeOptions);

const screenW = screen.width;
const screenH = screen.height;
const availW = screen.availWidth;
const availH = screen.availHeight;

const htmlContent = `
    <p>Selain: ${getBrowserInfo()}</p>
    <p>Käyttöjärjestelmä: ${getOS()}</p>
    <p>Näytön resoluutio: ${screenW} x ${screenH} px</p>
    <p>Käytettävissä oleva näyttötila: ${availW} x ${availH} px</p>
    <p>Päivämäärä: ${formattedDate}</p>
    <p>Aika: ${formattedTime}</p>
`;

const targetElement = document.getElementById('target');
targetElement.innerHTML = htmlContent;
