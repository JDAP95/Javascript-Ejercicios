let button = document.getElementById("button");

function colorAleatorio() {
    return "#" + Math.floor(Math.random()*16777215).toString(16);
}

button.addEventListener("click", (event) => {
    if (event) {
        document.body.style.backgroundColor = colorAleatorio();
    }
})