// script.js
// Clase Reserva
class Reserva {
  constructor(nombre, entrada, salida, personas) {
    this.nombre = nombre;
    this.entrada = new Date(entrada);
    this.salida = new Date(salida);
    this.personas = parseInt(personas, 10);
  }
  duracion() {
    // calcular diferencia en días (parte entera)
    const diff = (this.salida - this.entrada) / (1000*60*60*24);
    return Math.ceil(diff);
  }
}

// DOM refs
const tbody = document.querySelector("#tabla tbody");
const btnAdd = document.getElementById("btnAdd");
const totalPersonasSpan = document.getElementById("totalPersonas");
const reservas = [];

function validarFechas(entrada, salida) {
  const e = new Date(entrada), s = new Date(salida);
  return s > e;
}

function render() {
  tbody.innerHTML = "";
  reservas.forEach((r, idx) => {
    const tr = document.createElement("tr");
    if (r.duracion() > 7) tr.classList.add("tr-larga");
    tr.innerHTML = `<td>${idx+1}</td>
      <td>${r.nombre}</td>
      <td>${r.entrada.toISOString().slice(0,10)}</td>
      <td>${r.salida.toISOString().slice(0,10)}</td>
      <td>${r.duracion()}</td>
      <td>${r.personas}</td>
      <td><button data-idx="${idx}" class="borrar">Borrar</button></td>`;
    tbody.appendChild(tr);
  });
  totalPersonasSpan.textContent = reservas.reduce((s,r)=>s+r.personas,0);
}

btnAdd.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const entrada = document.getElementById("entrada").value;
  const salida = document.getElementById("salida").value;
  const personas = document.getElementById("personas").value;
  if (!nombre || !entrada || !salida) { alert("Rellena campos"); return; }
  if (!validarFechas(entrada, salida)) { alert("La fecha de salida debe ser posterior a entrada"); return; }
  const r = new Reserva(nombre, entrada, salida, personas);
  reservas.push(r);
  render();
});

// Delegación para borrar
tbody.addEventListener("click", (e) => {
  if (e.target.classList.contains("borrar")) {
    const idx = parseInt(e.target.dataset.idx,10);
    reservas.splice(idx,1);
    render();
  }
});
