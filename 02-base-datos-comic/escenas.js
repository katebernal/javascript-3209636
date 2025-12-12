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
import { comic } from "./bd.js";

let params = new URLSearchParams(window.location.search);
let id = params.get("id");

// Si no hay ID → redirigir
if (!id) {
    window.location.href = "site_index.html";
}

// Buscar la escena por ID
let escena = comic.escenas.find(e => e.id == id);

// Contenedor donde va todo
let box = document.getElementById("contenedorEscena");

// Pintar la información
box.innerHTML = `
    <section class="escena-section">
        <a class="volver" href="javascript:history.back()">⬅ Volver atrás</a>

        <h1>${escena.nombre}</h1>

        <div class="video-box">
            <video controls src="${escena.video}"></video>
        </div>

        <p class="descripcion">${escena.descripcion}</p>
    </section>
`;


