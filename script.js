//desestructuracion de datos
import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener los elementos del DOM
//seleccionaremos todos los elementos 'a' y se convertiran en 'enlaces'
let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");
let precioElemento = document.getElementById("precio");
console.log(enlaces)

//vamos hacer un bucle para la consulta de cada uno de los elementos
//agregaremos un elemento CLICK a cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        //bucle interno para remover el active a los elementos
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });
 
        //luego agregamos clase 'active' donde se hizo el click 
        //this vendria a ser "enlace" al que hicimos click
        this.classList.add('active')

        //traer la informacion del objeto correspondiente a la eleccion segun el "enlace" (con la funcion de abajo "obtenerContenido")
        let contenido = obtenerContenido(this.textContent)

        //mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    });
});

//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace) {
    let contenido = {
        Barcelona: barcelona,
        Roma: roma,
        París: paris,
        Londres: londres,
    };
    return contenido[enlace];
}