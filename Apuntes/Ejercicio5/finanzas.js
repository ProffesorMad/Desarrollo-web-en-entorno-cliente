// finanzas.js
// Ejecutar: node finanzas.js

let saldo = 1000.00;
const historial = []; // {tipo, cantidad, saldoFinal, fecha}

function registro(tipo, cantidad) {
  historial.push({ tipo, cantidad, saldoFinal: +saldo.toFixed(2), fecha: new Date().toISOString() });
}

function invertir(cantidad) {
  if (typeof cantidad !== 'number' || cantidad <= 0) throw new Error("Cantidad inválida");
  saldo += cantidad;
  registro("ingreso", cantidad);
}

function retirar(cantidad) {
  if (typeof cantidad !== 'number' || cantidad <= 0) throw new Error("Cantidad inválida");
  if (cantidad > saldo) throw new Error("Saldo insuficiente");
  saldo -= cantidad;
  registro("retirada", cantidad);
}

function calcularIntereses(tiempoAnios, tasaAnual = 0.03) {
  if (typeof tiempoAnios !== 'number' || tiempoAnios <= 0) throw new Error("Tiempo inválido");
  const intereses = saldo * (Math.pow(1 + tasaAnual, tiempoAnios) - 1);
  registro("intereses calculados", +intereses.toFixed(2));
  return +intereses.toFixed(2);
}

function mostrarHistorial() {
  console.table(historial);
}

// Ejemplo:
try {
  invertir(200);
  retirar(50);
  const intereses = calcularIntereses(2, 0.04);
  console.log("Intereses:", intereses);
} catch(e) {
  console.error(e.message);
}
console.log("Saldo final:", saldo.toFixed(2));
mostrarHistorial();
