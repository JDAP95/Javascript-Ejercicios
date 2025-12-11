const long = document.getElementById("longitud");
const btn = document.getElementById("boton");
const passw = document.getElementById("generada");

function generarContrasena(longitud) {
    const letterLower = "abcdefghijklmnopqrstuvwxyz";
    const letterUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specials = "!@#$%^&*()_-+=<>?";

    const chars = letterLower + letterUpper + numbers + specials;
    let password = "";

    for (let index = 0; index < longitud; index++) {
        const iAleatorio = Math.floor(Math.random() * chars.length);
        password += chars[iAleatorio];
    }

    return password;
}

btn.addEventListener("click", () => {
    const longitud = parseInt(long.value);

    if (!longitud || longitud < 4) {
        passw.textContent = "La longitud debe ser mayor o igual a 4";
    } else {
        passw.textContent = `Contraseña:  ${generarContrasena(longitud)}`;
    }    
});