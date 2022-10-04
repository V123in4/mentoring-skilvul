const summaryEl = document.getElementById('summary');
summaryEl.style.display = 'none';

const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', function() {
  const weightString = document.getElementById('weight').value;
  const heightString = document.getElementById('height').value;

  const weight = Number(weightString);
  const height = Number(heightString);

  // rumus
  const hasil = (weight + height + height)/2;

  const calculatedBMIEl = document.getElementById('calculatedBMI');
  const indicatorResult = document.getElementById('indicatorResult');

  summaryEl.style.display = 'block';
  calculatedBMIEl.innerText = hasil;

  if (hasil > 100) {
    indicatorResult.innerText = 'Normal';
  } else {
    indicatorResult.innerText = 'Tidak Normal';
  }
});
