const url = 'https://634808cc0484786c6e90070a.mockapi.io';

const user_id_localStorage = localStorage.getItem('user_id');

if (!user_id_localStorage) {
  window.location = 'index.html';
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

document.getElementById('formKirimAplikasi').addEventListener('submit', function(e) {
  e.preventDefault();

  const link_ktp = document.getElementById('link_ktp').value;
  const link_sktm = document.getElementById('link_sktm').value;

  postMockApi(`${url}/application`, {
    user_id: user_id_localStorage,
    event_id: 99,
    link_ktp,
    link_sktm
  }).then(function() {
    window.location = 'index.html';
  });

  console.log(link_ktp, link_sktm);
});