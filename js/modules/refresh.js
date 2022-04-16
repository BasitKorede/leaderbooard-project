// eslint-disable-next-line import/no-cycle
import postData from '../fuctionalties.js';

const sendData = async () => {
  const submitScore = document.querySelector('#form');
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  submitScore.addEventListener('submit', (e) => {
    e.preventDefault();
    postData(nameInput.value, scoreInput.value);
    submitScore.reset();
  });
};
export default sendData;