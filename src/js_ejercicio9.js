const tarea = document.getElementById("tarea");
const listaTareas = document.getElementById("listaTareas");
const btn = document.getElementById("btnEliminar");

let tareasStorage = JSON.parse(localStorage.getItem("tareas")) || [];

function guardarTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareasStorage));
}

function renderTareas() {
    listaTareas.innerHTML = "";
    tareasStorage.forEach((t, index) => {
        const li = document.createElement("li");
        li.classList.toggle("completada", t.completada);

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = t.completada;
        checkbox.addEventListener("change", () => {
            tareasStorage[index].completada = checkbox.checked;
            guardarTareas();
            renderTareas();
        });

        const texto = document.createElement("span");
        texto.textContent = t.texto;

        li.appendChild(checkbox);
        li.appendChild(texto);
        listaTareas.appendChild(li);
    });
}

tarea.addEventListener("keyup", (e) => {
    if (e.key === "Enter" && tarea.value.trim() !== "") {
        tareasStorage.push({ texto: tarea.value.trim(), completada: false });
        guardarTareas();
        renderTareas();
        tarea.value = '';
    }
});

btn.addEventListener("click", () => {
    tareasStorage = tareasStorage.filter(t => !t.completada);
    guardarTareas();
    renderTareas();
});

renderTareas();
