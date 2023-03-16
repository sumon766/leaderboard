const apiAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/4bjF3OHKhvPZzw3mxo08/scores';

const add = async (user, score) => {
  const apiOutput = await fetch(apiAddress, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  return apiOutput.json();
};
export default add;