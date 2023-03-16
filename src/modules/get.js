const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4bjF3OHKhvPZzw3mxo08/scores';
const getAllScore = async () => {
  const output = await fetch(address);
  const allScore = await output.json();
  return allScore;
};

const show = async () => {
  const table = document.getElementById('table');
  table.innerHTML = '';

  const received = await getAllScore();

  for (let i = 0; i < received.result.length; i += 1) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${received.result[i].user}</td><td>${received.result[i].score}</td>`;
    table.append(tr);
  }
};
export default show;