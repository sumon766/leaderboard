import './style.css';
import add from './modules/add.js';
import show from './modules/get.js';

const form = document.getElementById('form');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await add(user, score);
  e.target.reset();
});

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  window.location.reload();
});
show();