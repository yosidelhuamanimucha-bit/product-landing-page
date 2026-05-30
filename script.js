function toggleTema() {
  document.body.classList.toggle('oscuro');
  const btn = document.getElementById('toggle-tema');
  if (document.body.classList.contains('oscuro')) {
    btn.textContent = '☀️ Modo claro';
  } else {
    btn.textContent = '🌙 Modo oscuro';
  }
}