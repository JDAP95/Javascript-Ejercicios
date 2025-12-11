const display = document.getElementById("display");
const bIn = document.getElementById("iniciar");
const bPa = document.getElementById("pausar");
const bRe = document.getElementById("reiniciar");

let ms = 0, s = 0, m = 0;
let intervalo = null;

function actualizarDisplay() {
    let mStr = m < 10 ? `0${m}` : m;
    let sStr = s < 10 ? `0${s}` : s;
    let msStr = ms < 10 ? `0${ms}` : ms;
    display.textContent = `${mStr}:${sStr}:${msStr}`;
}

function iniciar() {
    if (intervalo) return;

    intervalo = setInterval(() => {
        ms++;
        if (ms === 100) {
            ms = 0;
            s++;
        }

        if (s === 60) {
            s = 0;
            m++;
        }

        actualizarDisplay();
    }, 10)
}

function pausar() {
    clearInterval(intervalo);
    intervalo = null;
}

function reiniciar() {
    pausar();
    ms = 0; s = 0; m = 0;
    actualizarDisplay();
}

bIn.addEventListener("click", iniciar);
bPa.addEventListener("click", pausar);
bRe.addEventListener("click", reiniciar);