const alumnos = ["Ana","Luis","Marta","Carlos","Sofia"];
const lista = document.getElementById("lista");
function render() {
  lista.innerHTML = "";
  alumnos.forEach((a,i)=>{
    const li = document.createElement("li");
    li.innerHTML = `${a} <button data-i="${i}" class="pres">Presente</button>`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = alumnos.length;
}
const presentesSet = new Set();
lista.addEventListener("click",(e)=>{
  if (e.target.classList.contains("pres")) {
    const i = +e.target.dataset.i;
    const alumno = alumnos[i];
    if (presentesSet.has(alumno)) { presentesSet.delete(alumno); e.target.textContent = "Presente"; e.target.parentElement.style.background=""; }
    else { presentesSet.add(alumno); e.target.textContent = "Ausente"; e.target.parentElement.style.background="#cfc"; }
    actualizarContadores();
  }
});
function actualizarContadores() {
  const pres = presentesSet.size;
  document.getElementById("presentes").textContent = pres;
  document.getElementById("porcentaje").textContent = ((pres / alumnos.length)*100).toFixed(0);
}
render();
