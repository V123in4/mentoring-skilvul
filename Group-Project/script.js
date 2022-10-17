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

// putMockApi('blablabla.mock.api/user/3', {foo: 'bar'})
async function putMockApi(url, payload) {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams(payload)
  });

  const result = response.json();

  return result;
}

async function deleteMockApi(url) {
  const response = await fetch(url, {
    method: 'DELETE',
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
        drawUserList();

        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
      })
  }
});

function drawUserList() {
  getMockApi(`${url}/user`)
    .then(function (result) {
      const listUser = document.getElementById('listUser');
      listUser.innerHTML = '';
      result.forEach((user) => {
        listUser.innerHTML += 
          `<li>${user.username} - ${user.password} - <a href="#" class="deleteUser" data-id=${user.id}>Delete</a></li>`
      });

      const deleteUserElements = document.getElementsByClassName('deleteUser');
      const deleteUserElementsArray = Array.from(deleteUserElements);

      deleteUserElementsArray.forEach(function(element) {
        element.addEventListener('click', function(e) {
          e.preventDefault();

          const id = e.target.dataset.id;

          deleteMockApi(`${url}/user/${id}`)
            .then(function(result) {
              console.log(result);
              drawUserList();
            });

        });
      });
    });
}

drawUserList();
