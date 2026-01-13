// clima.js
// Ejecutar: node clima.js

function generarTemperaturas(n=30, min=-5, max=40) {
  const arr = [];
  for (let i=0;i<n;i++) arr.push(Math.round((Math.random()*(max-min)+min)*10)/10);
  return arr;
}

function estadisticasTemp(arr) {
  const media = +(arr.reduce((s,x)=>s+x,0)/arr.length).toFixed(2);
  const bajoCero = arr.filter(x=>x<0).length;
  const max = Math.max(...arr), min = Math.min(...arr);
  const diaMax = arr.indexOf(max)+1, diaMin = arr.indexOf(min)+1;
  return { media, bajoCero, max, min, diaMax, diaMin, resumen: media>20 ? "Mes cálido" : "Mes templado" };
}

const temps = generarTemperaturas(30);
console.log("Temps:", temps);
console.log(estadisticasTemp(temps));
