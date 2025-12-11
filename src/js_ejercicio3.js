let button = document.querySelector("#ej-3 button");
let input = document.querySelector("#ej-3 input");
let lista = document.querySelector("#ej-3 ul");

button.addEventListener("click", () => {
    if (input.value.trim() === "") return;

    const li = document.createElement("li");
    li.innerHTML = `- <span>${input.value}</span> <button class="eliminar">Eliminar</button>`;
    lista.appendChild(li);
    input.value = "";
});

lista.addEventListener("click", (e) => {
    if (e.target.classList.contains("eliminar")) {
        e.target.parentElement.remove();
    }
});
