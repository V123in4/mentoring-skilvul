const dummyDataDariAPI = [
  {
    judul: 'Film Tentang Foo',
    deskripsi: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
  },
  {
    judul: 'Film Tentang Bar',
    deskripsi: 'Accusantium temporibus nam dicta modi culpa veritatis ad deserunt quas itaque tempore iure perferendis rem perspiciatis quod, maxime quos.'
  },
  {
    judul: 'Film Tentang Baz',
    deskripsi: 'Libero, ex enim.'
  }
];

const contentContainer = document.getElementById('content');

dummyDataDariAPI.forEach(function (data) {
  const div = document.createElement('div');

  div.classList.add('box');
  div.innerHTML = `
    <h3>${data.judul}</h3>
    <p>${data.deskripsi}</p>
  `;
  
  contentContainer.appendChild(div);
});
