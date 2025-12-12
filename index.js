import { comic } from "./bd.js";


document.getElementById("titulo").textContent = comic.nombrecomic;
document.getElementById("sinopsis").textContent = comic.sinopsis;


let lista = document.getElementById("listaCapitulos");
comic.escenas.forEach(c => {
let div = document.createElement("div");
div.className = "card";


div.innerHTML = `
<a href="escenas.html?id=${c.id}">
<img src="${c.image}" alt="${c.nombre}">
<h3>${c.nombre}</h3>
</a>
`;


lista.appendChild(div);
});