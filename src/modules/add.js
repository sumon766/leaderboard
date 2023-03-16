const apiAddress = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/UxFOv70nwykBmIpp2The/scores';

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