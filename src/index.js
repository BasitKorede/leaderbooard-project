// eslint-disable-next-line no-unused-vars
import { URI, displayScores } from '../modules/dom.js';
import { sendData, postData } from '../modules/refresh.js';

displayScores();
postData();
const resultUl = document.querySelector('.board-list');

const fetchData = async () => {
  await fetch(URI, {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((result) => displayScores(resultUl, result));
};

document.addEventListener('DOMContentLoaded', () => {
  sendData();
  fetchData();
});
