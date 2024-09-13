document.getElementById('drawName').addEventListener('click', drawName);
document
  .getElementById('removerEspacos')
  .addEventListener('click', removerEspacos);

function removerEspacos() {
  let textarea = document.getElementById('namesInput');
  let cleanedText = textarea.value
    .split('\n')
    .map((name) => name.trim().replace(/\s\d+$/, ''))
    .filter((name) => name)
    .join('\n');
  textarea.value = cleanedText;
}

function drawName() {
  let names = document.getElementById('namesInput').value.split('\n');
  let randomName = names[Math.floor(Math.random() * names.length)];
  localStorage.setItem('drawnName', randomName);
  window.open('../pages/peao.html', '_self');
}
