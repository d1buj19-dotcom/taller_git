// Juego de Frío o Caliente en JavaScript

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let adivinado = false;

while (!adivinado) {
    let intento = parseInt(prompt("Mi parcerito adivina un numero del 1 al 100:"));

    if (intento === numeroSecreto) {
        alert("¡Correcto! Adivinaste muy calidoso mi rey.");
        adivinado = true;
    } else if (Math.abs(intento - numeroSecreto) <= 10) {
        alert("muy hot");
    } else {
        alert("ice frio hielo");
    }
}
