// empleados.js
// Ejecutar: node empleados.js

const empleados = [];

function agregarEmpleado(emp) {
  const { nombre, horas, tarifaPorHora } = emp;
  if (!nombre || nombre.trim().length < 2) throw new Error("Nombre");
  if (typeof horas !== 'number' || horas < 0) throw new Error("Horas");
  if (typeof tarifaPorHora !== 'number' || tarifaPorHora <= 0) throw new Error("Tarifa");
  empleados.push({ nombre: nombre.trim(), horas, tarifaPorHora });
}

function calcularSalario(e) {
  return +(e.horas * e.tarifaPorHora).toFixed(2);
}

function nominaTotal() {
  return +(empleados.reduce((s, e) => s + calcularSalario(e), 0)).toFixed(2);
}

function empleadoConMasHoras() {
  if (empleados.length === 0) return null;
  return empleados.reduce((m, e) => e.horas > m.horas ? e : m, empleados[0]);
}

// Ejemplo
agregarEmpleado({ nombre:"Juan", horas:160, tarifaPorHora:10});
agregarEmpleado({ nombre:"Marta", horas:120, tarifaPorHora:12});
console.log("Salarios:", empleados.map(e=>({nombre:e.nombre,salario:calcularSalario(e)})));
console.log("Nómina total:", nominaTotal());
console.log("Empleado con más horas:", empleadoConMasHoras());
