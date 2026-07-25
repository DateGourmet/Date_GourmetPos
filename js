let precio = 0.60;

function calcularTotal() {
let cantidad = document.getElementById("cantidad").value;
let total = cantidad * precio;

document.getElementById("total").innerHTML =
"Total: $" + total.toFixed(2);
}

document.getElementById("cantidad").addEventListener("input", calcularTotal);
