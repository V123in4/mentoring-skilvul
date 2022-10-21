const params = new URLSearchParams(window.location.search);
const article_id = params.get('id');

const user_id_localStorage = localStorage.getItem('user_id');

const lengkapiDokumenH3 = document.getElementById('lengkapiDokumen');
const formAplikasi = document.getElementById('formSubmitAplikasi');

const url = 'https://634808cc0484786c6e90070a.mockapi.io';

async function getMockApi(url) {
  const response = await fetch(url);

  const result = response.json();

  return result;
}

async function postMockApi(url, payload) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(payload)
  });

  const result = response.json();

  return result;
}

getMockApi(`${url}/article/${article_id}`)
  .then(function (result) {
    const judul = document.getElementById('judul');
    const content = document.getElementById('content');

    judul.innerText = result.title;
    content.innerText = result.content;
  });

getMockApi(`${url}/application`)
  .then(function (result) {
    const isAlready = result.filter(function (application) {
      return application.user_id === user_id_localStorage && application.event_id === article_id
    });

    if (isAlready.length > 0) {
      lengkapiDokumenH3.innerText = 'Anda sudah melakukan submit aplikasi';
      formAplikasi.style.display = 'none';
    }
  });

document.getElementById('formSubmitAplikasi').addEventListener('submit', function(e) {
  e.preventDefault();

  const ktp = document.getElementById('ktp').value;
  const sktm = document.getElementById('sktm').value;

  postMockApi(`${url}/application`, {
    user_id: user_id_localStorage,
    event_id: article_id,
    link_ktp: ktp,
    link_sktm: sktm
  }).then(function() {
    window.location = 'article-list.html';
  });
});