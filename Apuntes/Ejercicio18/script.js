class Vehiculo {
  constructor(marca) { this.marca = marca; this.velocidad = 0; }
  acelerar(c) { this.velocidad += c; }
  frenar(c) { this.velocidad = Math.max(0, this.velocidad - c); }
}

const flota = [new Vehiculo("Ford"), new Vehiculo("Toyota"), new Vehiculo("BMW")];
const container = document.getElementById("vehiculos");

function render() {
  container.innerHTML = "";
  flota.forEach((v,i)=>{
    const div = document.createElement("div");
    div.innerHTML = `<strong>${v.marca}</strong> Vel: <span id="vel${i}">${v.velocidad}</span>
      <button data-i="${i}" class="acc">+10</button>
      <button data-i="${i}" class="brk">-5</button>`;
    container.appendChild(div);
  });
}
container.addEventListener("click",(e)=>{
  const i = e.target.dataset.i;
  if (i === undefined) return;
  const veh = flota[+i];
  if (e.target.classList.contains("acc")) veh.acelerar(10);
  if (e.target.classList.contains("brk")) veh.frenar(5);
  render();
});
render();
