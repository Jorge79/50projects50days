const insert = document.getElementById('insert');

window.addEventListener('keydown', (keyEvent) => {
  insert.innerHTML = `
  <div class="key">
    ${keyEvent.key === ' ' ? 'Space' : keyEvent.key}
    <small>event.key</small>
  </div>

  <div class="key">
    ${keyEvent.keyCode}
    <small>event.keyCode</small>
  </div>

  <div class="key">
    ${keyEvent.code}
    <small>event.code</small>
  </div>
  `
})