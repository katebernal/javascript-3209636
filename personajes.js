import { comic } from "./bd.js";


let params = new URLSearchParams(window.location.search);
let id = params.get("id");


if(id){
// Si tiene ID → página detalle
let personaje = comic.personajes.find(p => p.id == id);


if(!personaje){ window.location.href = "personajes.html"; }


document.body.innerHTML = `
<div class="detalle">
<a class="volver" href="javascript:history.back()">⬅ Volver atrás</a>
<h1>${personaje.nombre}</h1>
<img src="${personaje.image}" style="width:200px;border-radius:10px;">
<p>${personaje.descripcion}</p>
</div>
`;


} else {
// Si NO tiene ID → listado
let cont = document.getElementById("listaPersonajes");


comic.personajes.forEach(p =>{
let div = document.createElement("div");
div.className = "card";


div.innerHTML = `
<a href="personajes.html?id=${p.id}">
<img src="${p.image}">
<h3>${p.nombre}</h3>
</a>
`;


cont.appendChild(div);
});

}