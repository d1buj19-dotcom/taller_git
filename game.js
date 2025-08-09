// Juego de Frío o Caliente en JavaScript

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinado = false;

while (!adivinado) {
    let intento = parseInt(prompt("Adivina el número entre 1 y 100:"));

    if (intento === numeroSecreto) {
        alert("¡Correcto! Adivinaste el número.");
        adivinado = true;
    } else if (Math.abs(intento - numeroSecreto) <= 10) {
        alert("Caliente");
    } else {
        alert("Frío");
    }
}
