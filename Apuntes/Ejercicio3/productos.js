// productos.js
// Sistema de gestión de productos: añade, busca y calcula estadísticas.
// Ejecutar: node productos.js

// Productos iniciales (5)
const productos = [
  { nombre: "Leche", precio: 1.2, categoria: "alimentacion", stock: 50 },
  { nombre: "Televisor", precio: 399.99, categoria: "electronica", stock: 8 },
  { nombre: "Cafetera", precio: 49.5, categoria: "hogar", stock: 15 },
  { nombre: "Pan", precio: 0.95, categoria: "alimentacion", stock: 100 },
  { nombre: "Microondas", precio: 89.9, categoria: "hogar", stock: 5 }
];

// Valid categories
const CATS = ["alimentacion","electronica","hogar"];

/* 1) agregarProducto(producto)
   Validaciones:
   - nombre >=3 chars
   - precio > 0
   - categoria dentro de CATS
   - stock >= 0
*/
function agregarProducto(prod) {
  if (!prod || typeof prod !== 'object') throw new Error("Producto inválido");
  const { nombre, precio, categoria, stock } = prod;
  if (!nombre || nombre.trim().length < 3) throw new Error("Nombre inválido");
  if (typeof precio !== 'number' || precio <= 0) throw new Error("Precio inválido");
  if (!CATS.includes(categoria)) throw new Error("Categoría inválida");
  if (!Number.isInteger(stock) || stock < 0) throw new Error("Stock inválido");
  productos.push({ nombre: nombre.trim(), precio, categoria, stock });
}

/* 2) calcularEstadisticas()
   Devuelve: precioMedio, max, min, stockTotal, categoriaMasNumerosa
*/
function calcularEstadisticas() {
  if (productos.length === 0) return null;
  let suma = 0, max = productos[0].precio, min = productos[0].precio, stockTotal = 0;
  const contadorCategorias = {};
  for (const p of productos) {
    suma += p.precio;
    if (p.precio > max) max = p.precio;
    if (p.precio < min) min = p.precio;
    stockTotal += p.stock;
    contadorCategorias[p.categoria] = (contadorCategorias[p.categoria] || 0) + 1;
  }
  // categoria con más productos
  let catMax = null, catMaxCount = 0;
  for (const [cat, cnt] of Object.entries(contadorCategorias)) {
    if (cnt > catMaxCount) { catMaxCount = cnt; catMax = cat; }
  }
  return {
    precioMedio: +(suma / productos.length).toFixed(2),
    precioMax: max,
    precioMin: min,
    stockTotal,
    categoriaMasNumerosa: catMax
  };
}

/* 3) buscarProducto(nombre) - insensible a may/min */
function buscarProducto(nombre) {
  const s = (nombre||"").trim().toLowerCase();
  return productos.find(p => p.nombre.toLowerCase() === s) || null;
}

/* 4) reporte por consola */
function imprimirInforme() {
  console.log("=== LISTADO DE PRODUCTOS ===");
  productos.forEach((p,i)=> console.log(`${i+1}. ${p.nombre} - ${p.categoria} - €${p.precio} - stock: ${p.stock}`));
  console.log("\n=== ESTADÍSTICAS ===");
  console.log(calcularEstadisticas());
  console.log("\n=== BÚSQUEDA DE EJEMPLO: 'Pan' ===");
  console.log(buscarProducto("Pan"));
}

// Ejemplo de uso:
try {
  agregarProducto({ nombre: "Tablet", precio: 199.99, categoria: "electronica", stock: 12 });
} catch(e) { console.error(e.message); }

imprimirInforme();
