const penanda = document.getElementById('penanda');
const signInNav = document.getElementById('signInNav');
const signUpNav = document.getElementById('signUpNav');
const signOutNav = document.getElementById('signOutNav');
const kirimAplikasiNav = document.getElementById('kirimAplikasiNav');

const buttonSignOut = document.getElementById('buttonSignOut');

const user_id_localStorage = localStorage.getItem('user_id');

if (user_id_localStorage) {
  penanda.innerText = "kamu sudah login";
  signInNav.style.display = 'none';
  signUpNav.style.display = 'none';
} else {
  penanda.innerText = "kamu belum login";
  signOutNav.style.display = 'none';
  kirimAplikasiNav.style.display = 'none';
}

buttonSignOut.addEventListener('click', function(e) {
  e.preventDefault();

  localStorage.removeItem('user_id');

  window.location = 'index.html';
});
