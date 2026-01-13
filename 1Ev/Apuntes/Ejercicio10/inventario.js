// inventario.js
// Ejecutar: node inventario.js

const inventario = [
  { nombre:"Tornillo", unidades:5, fechaEntrada: new Date("2024-01-03")},
  { nombre:"Cinta", unidades:20, fechaEntrada: new Date("2024-06-12")},
  { nombre:"Caja", unidades:2, fechaEntrada: new Date("2023-11-30")}
];

function articulosMasViejos(n=1) {
  return inventario.slice().sort((a,b)=>a.fechaEntrada - b.fechaEntrada).slice(0,n);
}
function contarBajo10() {
  return inventario.filter(i=>i.unidades < 10).length;
}
function ordenarPorFechaAsc() {
  return inventario.slice().sort((a,b)=>a.fechaEntrada - b.fechaEntrada);
}
function unidadesTotales() {
  return inventario.reduce((s,i)=>s+i.unidades,0);
}

console.log("Más viejos:", articulosMasViejos(2));
console.log("Bajo 10:", contarBajo10());
console.log("Ordenados:", ordenarPorFechaAsc());
console.log("Unidades totales:", unidadesTotales());
