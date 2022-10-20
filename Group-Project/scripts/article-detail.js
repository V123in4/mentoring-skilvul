const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const url = 'https://634808cc0484786c6e90070a.mockapi.io';

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

getMockApi(`${url}/article/${id}`)
  .then(function (result) {
    const judul = document.getElementById('judul');
    const content = document.getElementById('content');

    judul.innerText = result.title;
    content.innerText = result.content;
  });
