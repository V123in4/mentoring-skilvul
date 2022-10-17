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

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    postMockApi(`${url}/user`, {
      username,
      password,
      avatar: 'https://cc.itp.ac.id/wp-content/uploads/2018/10/User-Administrator-Blue-icon.png'
    })
      .then((result) => {
        console.log(result);
        drawUserList();

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
      })
  }
});

function drawUserList() {
  getMockApi(`${url}/user`)
    .then((result) => {
      const listUser = document.getElementById('listUser');
      listUser.innerHTML = '';
      console.log(result)
      result.forEach((user) => {
        listUser.innerHTML += 
          `<li>${user.username} - ${user.password}</li>`
      })
    });
}

drawUserList();
