// texto.js
// Ejecutar: node texto.js

function analizarTexto(t) {
  if (typeof t !== 'string') t = String(t);
  const totalCaracteres = t.length;
  // palabras: split por espacios y filtrar vacíos
  const palabras = t.trim().length === 0 ? [] : t.trim().split(/\s+/);
  const totalPalabras = palabras.length;
  // frases: split por .,!,? y filtrar
  const frases = t.split(/[.!?]+/).filter(s=>s.trim().length>0);
  const totalFrases = frases.length;
  // contar vocales
  const vok = { a:0,e:0,i:0,o:0,u:0, total:0};
  for (const ch of t) {
    const c = ch.toLowerCase();
    if ("aeiou".includes(c)) { vok[c]++; vok.total++; }
  }
  return {
    totalCaracteres,
    totalPalabras,
    totalFrases,
    vocales: vok
  };
}

const ejemplo = `Hola mundo! Esto es una prueba. ¿Funciona? Sí, funciona bien.`;
console.log(analizarTexto(ejemplo));
