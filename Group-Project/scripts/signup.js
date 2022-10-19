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

document.getElementById('formSignUp').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    getMockApi(`${url}/user`).then(function(users) {
      console.log('users', users);
      const isUserExists = users.find(function(user) {
        return user.username === username
      });
      console.log('isUserExists', isUserExists);

      if (isUserExists) {
        alert('username sudah dipakai');
      } else {
        postMockApi(`${url}/user`, {
          name,
          username,
          password,
        })
          .then((result) => {
            document.getElementById('name').value = '';
            document.getElementById('username').value = '';
            document.getElementById('password').value = '';
    
            window.location = 'index.html';
          })
      }
    });
  }
});
