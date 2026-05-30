function toggleTema() {
  document.body.classList.toggle('oscuro');
  const btn = document.getElementById('toggle-tema');
  if (document.body.classList.contains('oscuro')) {
    btn.textContent = '☀️ Modo claro';
  } else {
    btn.textContent = '🌙 Modo oscuro';
  }
}
function toggleContacto() {
  const form = document.getElementById('contacto-form');
  const titulo = document.querySelector('#contacto h4');
  form.classList.toggle('abierto');
  if (form.classList.contains('abierto')) {
    titulo.textContent = 'Contáctanos ▲';
  } else {
    titulo.textContent = 'Contáctanos ▼';
  }
}