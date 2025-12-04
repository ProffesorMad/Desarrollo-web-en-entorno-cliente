// biblioteca.js
// Ejecutar: node biblioteca.js

const biblioteca = [];

function agregarLibro(lib) {
  const { titulo, autor, paginas, leido } = lib;
  if (!titulo || titulo.trim().length < 3) throw new Error("Título inválido");
  if (!Number.isInteger(paginas) || paginas <= 10) throw new Error("Páginas inválido");
  biblioteca.push({ titulo: titulo.trim(), autor: autor||"Desconocido", paginas, leido: !!leido });
}

function marcarComoLeido(titulo) {
  const t = (titulo||"").trim().toLowerCase();
  const libro = biblioteca.find(l => l.titulo.toLowerCase() === t);
  if (!libro) throw new Error("No encontrado");
  libro.leido = true;
}

function estadisticasLectura() {
  const total = biblioteca.length;
  const leidos = biblioteca.filter(l=>l.leido).length;
  const porcentaje = total === 0 ? 0 : +(leidos/total*100).toFixed(2);
  return { total, leidos, porcentaje };
}

try {
  agregarLibro({ titulo:"El Quijote", autor:"Cervantes", paginas:863, leido:false});
  agregarLibro({ titulo:"JS Avanzado", paginas:320, leido:true});
  marcarComoLeido("El Quijote");
} catch(e) {
  console.error(e.message);
}

console.log(biblioteca);
console.log(estadisticasLectura());
