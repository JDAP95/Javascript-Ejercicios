const botones = document.querySelectorAll("#ej-5 button");
const resultado = document.getElementById("resultado");
const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const n1 = parseFloat(num1.value);
        const n2 = parseFloat(num2.value);
        const op = boton.dataset.operacion;

    if (isNaN(n1) || isNaN(n2)) {
            resultado.textContent = "Introduce números válidos";
            return;
        }

        let res = 0;
        switch (op) {
            case "sumar":
                res = n1 + n2;
                break;
            case "restar":
                res = n1 - n2;
                break;
            case "multiplicar":
                res = n1 * n2;
                break;
            case "dividir":
                res = n2 === 0 ? "Dividir por cero es infinito" : n1 / n2;
                break;
        }

        resultado.textContent = res;
    })
})