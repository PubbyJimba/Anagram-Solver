const input = document.getElementById('input');
const button = document.getElementById('button');

const getAnagrams = () => axios.get(`http://localhost:4004/api/anagrams`);
const solve = letters => axios.post(`http://localhost:4004/api/solver`, input);


button.addEventListener('click', solve);