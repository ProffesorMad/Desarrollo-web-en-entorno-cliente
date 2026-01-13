const notas = [];
const tbody = document.querySelector("#tabla tbody");
const add = document.getElementById("add");
const buscar = document.getElementById("buscar");

function render(filter="") {
  tbody.innerHTML = "";
  notas.filter(n=>n.titulo.toLowerCase().includes(filter.toLowerCase())).forEach((n,i)=>{
    const tr = document.createElement("tr");
    if (n.prioridad.toLowerCase()==="alta") tr.classList.add("high");
    tr.innerHTML = `<td>${n.titulo}</td><td>${n.prioridad}</td><td><button data-i="${i}" class="del">Borrar</button></td>`;
    tbody.appendChild(tr);
  });
}

add.addEventListener("click", ()=>{
  const titulo = document.getElementById("titulo").value.trim();
  const prioridad = document.getElementById("prioridad").value.trim();
  const desc = document.getElementById("desc").value.trim();
  if (!titulo) { alert("Título requerido"); return; }
  notas.push({ titulo, prioridad, desc });
  render(buscar.value);
});

tbody.addEventListener("click", (e)=> {
  if (e.target.classList.contains("del")) {
    const i = parseInt(e.target.dataset.i,10);
    notas.splice(i,1);
    render(buscar.value);
  }
});

buscar.addEventListener("input", ()=> render(buscar.value));
