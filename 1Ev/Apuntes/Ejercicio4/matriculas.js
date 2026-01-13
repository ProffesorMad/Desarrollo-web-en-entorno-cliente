// matriculas.js
// Ejecutar: node matriculas.js

const CURSOS = ["JavaScript","Python","Java"];
const alumnos = []; // {nombre, edad, curso, notaMedia}

function validarAlumno(a) {
  if (!a || typeof a !== 'object') throw new Error("Alumno inválido");
  const { nombre, edad, curso, notaMedia } = a;
  if (!nombre || nombre.trim().length < 3) throw new Error("Nombre");
  if (!Number.isInteger(edad) || edad < 18 || edad > 65) throw new Error("Edad");
  if (!CURSOS.includes(curso)) throw new Error("Curso no válido");
  if (typeof notaMedia !== 'number' || notaMedia < 0 || notaMedia > 10) throw new Error("Nota media");
}

function matricularAlumno(a) {
  validarAlumno(a);
  alumnos.push({ ...a, nombre: a.nombre.trim() });
}

function listarAlumnos() {
  return alumnos.slice();
}

function filtrarPorCurso(curso) {
  return alumnos.filter(x => x.curso === curso);
}

function mejorAlumno() {
  if (alumnos.length === 0) return null;
  return alumnos.reduce((m, a) => a.notaMedia > m.notaMedia ? a : m, alumnos[0]);
}

// Ejemplo
try {
  matricularAlumno({ nombre:"Ana Perez", edad:25, curso:"JavaScript", notaMedia:8.5 });
  matricularAlumno({ nombre:"Luis Gomez", edad:30, curso:"Python", notaMedia:9.2 });
  matricularAlumno({ nombre:"Rosa Diaz", edad:22, curso:"JavaScript", notaMedia:7.8 });
} catch(e) {
  console.error("Error matriculando:", e.message);
}

console.log("Todos:", listarAlumnos());
console.log("JavaScript:", filtrarPorCurso("JavaScript"));
console.log("Mejor alumno:", mejorAlumno());
