let boxLeft = 0;
let boxTop = 0;

const kecepatan = 5;

document.addEventListener('keydown', function(e) {
  const boxEl = document.getElementById('box');

  if (e.key === 'ArrowRight') {
    const to = boxLeft + kecepatan
    boxLeft = to;
    boxEl.style.left = to + 'px';
    console.log('->');
  } else if (e.key === 'ArrowLeft') {
    const to = boxLeft - kecepatan
    boxLeft = to;
    boxEl.style.left = to + 'px';
    console.log('<-');
  } else if (e.key === 'ArrowUp') {
    const to = boxTop - kecepatan
    boxTop = to;
    boxEl.style.top = to + 'px';
    console.log('^');
  } else if (e.key === 'ArrowDown') {
    const to = boxTop + kecepatan
    boxTop = to;
    boxEl.style.top = to + 'px';
    console.log('v');
  }

  if (boxLeft > 100) {
    alert('anda sudah di tepi')
  }
})
