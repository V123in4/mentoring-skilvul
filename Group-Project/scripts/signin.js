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

document.getElementById('formSignIn').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    getMockApi(`${url}/user`).then(function(users) {
      const loggingUser = users.find(function(user) {
        return user.username === username;
      });

      if (loggingUser) {
        console.log('melakukan proses login.....');
        if (loggingUser.password === password) {
          console.log('login berhasil....');
          localStorage.setItem('user_id', loggingUser.id);
          window.location = 'index.html';
        } else {
          console.log('password salah!!!');
        }
      } else {
        console.log('user tidak ditemukan.....');
      }
    });
  }
});
