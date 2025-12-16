const contenedor = document.getElementById("escenas-container");
const modal = document.getElementById("modal");
const modalVideo = document.getElementById("modalVideo");
const modalTitle = document.getElementById("modalTitle");
const closeBtn = document.querySelector(".close");

escenasBD.forEach(escena => {
  const card = document.createElement("div");
  card.classList.add("escena-card");

  card.innerHTML = `
    <img src="${escena.imagen}">
    <p>${escena.titulo}</p>
  `;

  card.addEventListener("click", () => {
    modal.style.display = "flex";
    modalVideo.src = escena.video;
    modalTitle.textContent = escena.titulo;
    modalVideo.play();
  });

  contenedor.appendChild(card);
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalVideo.pause();
  modalVideo.currentTime = 0;
});
