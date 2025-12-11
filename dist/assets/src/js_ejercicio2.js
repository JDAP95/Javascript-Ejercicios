let button = document.getElementById("button");
let i = 0;

button.addEventListener("click", (event) => {
    if (event) {
        ++i
        document.querySelector("#ej-2 p").textContent = `Clics: ${i}`;
    }
})