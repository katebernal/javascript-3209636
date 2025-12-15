
// Todas las tarjetas de escena
const cards = document.querySelectorAll('.escena-card');

// Modal completo
const modal = document.getElementById('modal');

// Video dentro del modal
const modalVideo = document.getElementById('modalVideo');

// Título del modal
const modalTitle = document.getElementById('modalTitle');

// Botón para cerrar el modal (X)
const closeBtn = document.querySelector('.close');


/* =========================
   ABRIR MODAL AL DAR CLICK
   ========================= */
cards.forEach(card => {
  card.addEventListener('click', () => {

    // Carga el video usando el atributo data-video del HTML
    modalVideo.src = card.dataset.video;

    // Coloca el título usando data-title
    modalTitle.textContent = card.dataset.title;

    // Muestra el modal
    modal.style.display = 'flex';

    // Reproduce el video automáticamente
    modalVideo.play();
  });
});


/* =========================
   CERRAR MODAL CON BOTÓN X
   ========================= */
closeBtn.addEventListener('click', () => {

  // Oculta el modal
  modal.style.display = 'none';

  // Pausa el video
  modalVideo.pause();

  // Reinicia el video al inicio
  modalVideo.currentTime = 0;
});


/* =========================
   CERRAR MODAL AL CLICK FUERA
   ========================= */
modal.addEventListener('click', (e) => {

  // Si el click fue en el fondo y no en el video
  if (e.target === modal) {

    // Oculta el modal
    modal.style.display = 'none';

    // Pausa el video
    modalVideo.pause();

    // Reinicia el tiempo del video
    modalVideo.currentTime = 0;
  }
});
