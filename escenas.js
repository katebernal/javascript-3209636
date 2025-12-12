import { comic } from "./bd.js";

// Contenedor
let contenedor = document.getElementById("contenedorCapitulos");

// Recorrer las escenas como capítulos
comic.escenas.forEach(cap => {

    let div = document.createElement("div");
    div.className = "capitulo-card";

    div.innerHTML = `
        <a href="escenas.html?id=${cap.id}">
            <img src="${cap.image}" alt="${cap.nombre}">
            <h3>${cap.nombre}</h3>
        </a>
    `;

    contenedor.appendChild(div);
});

