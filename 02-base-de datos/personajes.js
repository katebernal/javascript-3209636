function abrirPersonaje(card) {
  const img = card.querySelector("img").src;
  const nombre = card.querySelector("p").innerText;

  document.getElementById("modal-img").src = img;
  document.getElementById("modal-nombre").innerText = nombre;

  document.getElementById("modal").classList.add("activo");
}

// cerrar al hacer clic fuera
document.getElementById("modal").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("activo");
});
