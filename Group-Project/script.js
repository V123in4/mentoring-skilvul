const url = 'https://634808cc0484786c6e90070a.mockapi.io';

document.getElementById('formSignUp').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username && password) {
    console.log(username)
    fetch(`${url}/user`, {
      method: 'POST',
      body: {
        username,
        password
      }
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
    })
  }
});

fetch(`${url}/user`)
  .then((response) => response.json())
  .then((result) => {
    const listUser = document.getElementById('listUser');
    listUser.innerHTML = '';
    console.log(result)
    result.forEach((user) => {
      listUser.innerHTML += 
        `<li>${user.username} - ${user.password}</li>`
    })
  })