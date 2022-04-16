/* eslint-disable import/no-cycle */
import { URI, displayScores } from './modules/dom.js';

import sendData from './modules/refresh.js';

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
const postData = async (user, score) => {
  await fetch(URI, {
    method: 'POST',
    body: JSON.stringify({ user, score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};
export default postData;
