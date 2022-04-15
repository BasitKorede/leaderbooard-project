const API_KEY = 's5I1Iezs2fp5U1vv55v4';
export const URI = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${API_KEY}/scores`;


export const displayScores = (list, res) => {
  const { result } = undefined;
  const scores = [];
  for (let i = 0; i < result.length; i += 1) {
    scores.push([result[i].user, result[i].score]);
  }
  list.innerHTML = '';
  scores.forEach((score) => {
    list.innerHTML += `<li>${score[0]}: ${score[1]}</li>`;
  });
  if (scores.length > 5) { list.classList.add('scroll'); }
};

const refresh = document.querySelector('.refresh-button');
refresh.addEventListener('click', () => {
  fetchData();
});