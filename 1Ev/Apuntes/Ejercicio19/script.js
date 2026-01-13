const gastos = [];
const tbody = document.querySelector("#tabla tbody");
const totalTd = document.getElementById("total");
const mesFiltro = document.getElementById("mesFiltro");

function render() {
  tbody.innerHTML = "";
  gastos.forEach(g=>{
    const tr = document.createElement("tr");
    if (g.cantidad > 200) tr.style.background="#fdd";
    tr.innerHTML = `<td>${g.concepto}</td><td>${g.cantidad.toFixed(2)}</td><td>${g.fecha}</td>`;
    tbody.appendChild(tr);
  });
  totalTd.textContent = gastos.reduce((s,g)=>s+g.cantidad,0).toFixed(2);
  // rellenar meses
  const meses = [...new Set(gastos.map(g=> g.fecha.slice(0,7)))]; // YYYY-MM
  mesFiltro.innerHTML = '<option value="">Todos</option>' + meses.map(m=>`<option value="${m}">${m}</option>`).join('');
}

document.getElementById("add").addEventListener("click", ()=>{
  const concepto = document.getElementById("concepto").value.trim();
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const fecha = document.getElementById("fecha").value;
  if (!concepto || !fecha || isNaN(cantidad)) { alert("Completa campos"); return; }
  gastos.push({ concepto, cantidad, fecha });
  render();
});

mesFiltro.addEventListener("change", ()=>{
  const m = mesFiltro.value;
  if (!m) render();
  else {
    // filtrar por mes
    const fil = gastos.filter(g=> g.fecha.startsWith(m));
    tbody.innerHTML = "";
    fil.forEach(g=>{
      const tr = document.createElement("tr");
      if (g.cantidad>200) tr.style.background="#fdd";
      tr.innerHTML = `<td>${g.concepto}</td><td>${g.cantidad.toFixed(2)}</td><td>${g.fecha}</td>`;
      tbody.appendChild(tr);
    });
    totalTd.textContent = fil.reduce((s,g)=>s+g.cantidad,0).toFixed(2);
  }
});
