// agenda.js
// Ejecutar: node agenda.js

const agenda = [];

function agregarContacto(nombre, telefono, etiquetas = []) {
  if (!nombre || nombre.trim().length < 2) throw new Error("Nombre");
  if (!telefono || telefono.trim().length < 6) throw new Error("Tel");
  agenda.push({ nombre: nombre.trim(), telefono: telefono.trim(), etiquetas: etiquetas.map(e=>e.toLowerCase()) });
}

function filtrarEtiqueta(tag) {
  const t = tag.toLowerCase();
  return agenda.filter(c=> c.etiquetas.includes(t));
}

function buscarPorNombre(parcial) {
  const s = parcial.toLowerCase();
  return agenda.filter(c=> c.nombre.toLowerCase().includes(s));
}

function ordenarAlfabeticamente() {
  return agenda.slice().sort((a,b)=> a.nombre.localeCompare(b.nombre));
}

// Ejemplo
agregarContacto("Ana Ruiz","600111222",["Trabajo"]);
agregarContacto("Luis Perez","699888777",["Familia","Urgente"]);
console.log("Filtrar 'trabajo':", filtrarEtiqueta("trabajo"));
console.log("Buscar 'Lu':", buscarPorNombre("Lu"));
console.log("Ordenada:", ordenarAlfabeticamente());
