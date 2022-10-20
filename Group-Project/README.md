## Cara membuat halaman detail artikel

1. buatlah `article-list.html`, yang mana file ini berfungsi untuk menampilkan semua list article yang sudah ada di MockAPI
2. `article-list.html` mempunyai javascript file untuk melakukan handle fetch/request ke endpoint MockAPI, file js tersebut dinamakan  `article-list.js`
3. yang dilakukan `article-list.js` adalah melakukan fetch/request ke endpoint MockAPI `/article`.
4. Kembalian dari endpoint tsb adalah array of object
```json
[
 {
  "title": "title 1",
  "content": "Lorem....",
  "id": "1"
 },
 {
  "title": "title 2",
  "content": "Lorem....",
  "id": "2"
 },
 {
  "title": "title 3",
  "content": "Lorem untuk artikel 3 berubah....",
  "id": "3"
 }
]
```
5. array of object tesebut, kita for each kan untuk digambar/ditulis di file `article-list.html` dengan menggunakan `innerHTML` dan ditampilkan sbg box
6. pada saat menggambar/menulis box tsb, berikan tombol `Detail` yang memiliki `data-id=${id}`
7. untuk tiap2 tombol `detail` masing2 box tsb kita berikan `eventListener click`
8. pada saat tombol `Detail` diklik maka aplikasi akan meredirect ke halaman `article-detail.html?id=${id}` dengan id yang sesuai dari masing2 box.
9. buatlah file `article-detail.html` yg mana nantinya file tsb berisi sebuah title dan content dari article yang dipilih (tombol detail nya di klik)
10. `article-detail.html` mempunyai javascript file untuk melakukan handle fetch/request ke endpoint MockAPI, file js tersebut dinamakan  `article-detail.js`
11. file `article-detail.js` tersebut, akan melakukan fetch/request ke endpoint MockAPI `article/:id`
12. kembalian dari endppoint tsb adalah sebuah object yang mewakili article tertentu
```json
{
  "title": "title 3",
  "content": "Lorem untuk artikel 3 berubah....",
  "id": "3"
}
```
13. kembalian dari endppoint tsb akan dipakai untuk dituliskan di bagian `judul` dan `content` pd html nya
