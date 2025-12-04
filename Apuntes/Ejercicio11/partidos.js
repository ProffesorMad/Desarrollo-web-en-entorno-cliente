// partidos.js
// Ejecutar: node partidos.js

const equipos = [
  { nombre:"A", golesFavor:0, golesContra:0, puntos:0 },
  { nombre:"B", golesFavor:0, golesContra:0, puntos:0 },
  { nombre:"C", golesFavor:0, golesContra:0, puntos:0 },
  { nombre:"D", golesFavor:0, golesContra:0, puntos:0 }
];

// Simular 10 partidos aleatorios entre equipos distintos
function partidoAleatorio() {
  const i = Math.floor(Math.random()*equipos.length);
  let j = Math.floor(Math.random()*equipos.length);
  while (j === i) j = Math.floor(Math.random()*equipos.length);
  const equipoA = equipos[i], equipoB = equipos[j];
  const golesA = Math.floor(Math.random() * 5);
  const golesB = Math.floor(Math.random() * 5);
  equipoA.golesFavor += golesA; equipoA.golesContra += golesB;
  equipoB.golesFavor += golesB; equipoB.golesContra += golesA;
  if (golesA > golesB) { equipoA.puntos += 3; }
  else if (golesA < golesB) { equipoB.puntos += 3; }
  else { equipoA.puntos += 1; equipoB.puntos += 1; }
  return { equipoA: equipoA.nombre, equipoB: equipoB.nombre, golesA, golesB };
}

const historico = [];
for (let k=0;k<10;k++) historico.push(partidoAleatorio());

function tablaFinal() {
  return equipos.map(e => ({ nombre:e.nombre, puntos:e.puntos, diferencia: e.golesFavor - e.golesContra, gf:e.golesFavor }));
}

console.log("Histórico:", historico);
console.log("Tabla final:", tablaFinal().sort((a,b)=> b.puntos - a.puntos || b.diferencia - a.diferencia));
