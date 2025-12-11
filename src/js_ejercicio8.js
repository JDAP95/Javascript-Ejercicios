const div = document.getElementById("ej-8");
const texto = document.getElementById("entrada");
const span_palabras = document.getElementById("palabras");
const span_caracteres = document.getElementById("caracteres");

const parrafo = document.createElement("p");
div.appendChild(parrafo);

texto.addEventListener("input", () => {
    parrafo.textContent = texto.value;

    const texto_normalizado = texto.value.trim().replace(/\s+/g, ' ');
    const palabras = texto_normalizado.length > 0 ? texto_normalizado.split(" ") : [];

    const caracteres = texto.value.replace(/\s/g, '');

    span_palabras.textContent = palabras.length;
    span_caracteres.textContent = caracteres.length;
});