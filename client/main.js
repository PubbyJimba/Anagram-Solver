const letters = document.getElementById('input');

const getAnagrams = () => axios.get(`http://localhost:4004/api/anagramsolver`);
const solve = letters => axios.post(`http://localhost:4004/api/anagramsolver`, letters);