const letters = document.getElementById('input');
const button = document.getElementById('button');
const twos = document.getElementById('Twos');
const threes = document.getElementById('Threes');
const fours = document.getElementById('Fours');
const fives = document.getElementById('Fives');
const sixes = document.getElementById('Sixes');
const sevens = document.getElementById('Sevens');
const main = document.getElementById('main');

const getAnagrams = () =>
  axios.get(`/api/anagrams`).then((res) => {
    twos.innerHTML = res.data.twos.join(', ');
    threes.innerHTML = res.data.threes.join(', ');
    fours.innerHTML = res.data.fours.join(', ');
    fives.innerHTML = res.data.fives.join(', ');
    sixes.innerHTML = res.data.sixes.join(', ');
    sevens.innerHTML = res.data.sevens.join(', ');
  });

const solve = (e) => {
  e.preventDefault();
  const input = letters.value;
  const body = { input };
  axios.post(`/api/solver`, body).then((res) => {
    if (res.status == 200) {
      getAnagrams();
    }
  });
  main.classList.remove('hidden');
};

button.addEventListener('click', solve);