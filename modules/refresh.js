import { URI } from './dom.js';

export const postData = async (user, score) => {
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

export const sendData = async () => {
  const submitScore = document.querySelector('#form');
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  submitScore.addEventListener('submit', (e) => {
    e.preventDefault();
    postData(nameInput.value, scoreInput.value);
    submitScore.reset();
  });
};