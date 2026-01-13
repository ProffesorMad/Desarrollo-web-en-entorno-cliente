const cantidad = document.getElementById("cantidad");
const precio = document.getElementById("precio");
const iva = document.getElementById("iva");
const totalSpan = document.getElementById("total");
function calcular() {
  const c = parseFloat(cantidad.value);
  const p = parseFloat(precio.value);
  const i = parseFloat(iva.value);
  if (isNaN(c) || isNaN(p) || isNaN(i)) {
    totalSpan.textContent = "Error: campos numéricos";
    return;
  }
  const total = c * p * (1 + i/100);
  totalSpan.textContent = total.toFixed(2);
}
cantidad.addEventListener("input", calcular);
precio.addEventListener("input", calcular);
iva.addEventListener("input", calcular);

document.getElementById("export").addEventListener("click", ()=>{
  const lista = document.getElementById("lista");
  lista.innerHTML = `<li>Cantidad: ${cantidad.value}</li><li>Precio: ${precio.value}</li><li>IVA: ${iva.value}</li><li>Total: ${totalSpan.textContent}</li>`;
});
