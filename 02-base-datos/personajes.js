const container = document.getElementById("personajes-container");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalName = document.getElementById("modal-name");

personajesBD.forEach(personaje => {
  const card = document.createElement("div");
  card.classList.add("personaje-card");

  card.innerHTML = `
    <img src="${personaje.imagen}">
    <p>${personaje.nombre}</p>
  `;

  card.addEventListener("click", () => {
    modalImg.src = personaje.imagen;
    modalName.textContent = personaje.nombre;
    modal.classList.add("active");
  });

  container.appendChild(card);
});

// Cerrar modal
modal.addEventListener("click", () => {
  modal.classList.remove("active");
});
