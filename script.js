function formatNumber(value) {
  return Number(value).toLocaleString(undefined, { maximumFractionDigits: 3 });
}

function convertMm() {
  const mm = Number(document.getElementById('mmInput').value);
  const result = document.getElementById('inchResult');
  if (!mm) return result.textContent = 'Please enter a value in millimetres.';
  result.textContent = `${formatNumber(mm / 25.4)} inches`;
}

function calculateVolume() {
  const l = Number(document.getElementById('length').value);
  const w = Number(document.getElementById('width').value);
  const t = Number(document.getElementById('thickness').value);
  const result = document.getElementById('volumeResult');
  if (!l || !w || !t) return result.textContent = 'Please enter length, width and thickness.';
  const cubicMeters = (l * w * t) / 1000000000;
  result.textContent = `${formatNumber(cubicMeters)} m³`;
}

function calculateSofa() {
  const seats = Number(document.getElementById('seats').value);
  const perPerson = Number(document.getElementById('perPerson').value);
  const result = document.getElementById('sofaResult');
  if (!seats || !perPerson) return result.textContent = 'Please enter seating capacity and width per person.';
  const total = seats * perPerson;
  result.textContent = `Recommended seating width: ${formatNumber(total)} mm (${formatNumber(total / 25.4)} in)`;
}
