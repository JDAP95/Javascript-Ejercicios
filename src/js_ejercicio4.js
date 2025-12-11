const input = document.querySelector("#ej-4 input");
const lista = document.querySelectorAll("#ej-4 li");

input.addEventListener("input", () => {
  const filtro = input.value.toLowerCase();

  lista.forEach(li => {
    const texto = li.textContent.toLowerCase();
    li.style.display = texto.includes(filtro) ? "block" : "none";
  });
});
