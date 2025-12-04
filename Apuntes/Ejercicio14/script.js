// script.js
const dataProductos = [
  {id:1, nombre:"Camiseta", precio:15},
  {id:2, nombre:"Pantalón", precio:30},
  {id:3, nombre:"Calcetines", precio:5}
];
const productosDiv = document.getElementById("productos");
const carritoUl = document.getElementById("carrito");
const totalSpan = document.getElementById("total");
const carrito = [];

function renderProductos() {
  productosDiv.innerHTML = "";
  dataProductos.forEach(p=>{
    const div = document.createElement("div");
    div.innerHTML = `${p.nombre} - €${p.precio} <button data-id="${p.id}">Añadir</button>`;
    productosDiv.appendChild(div);
  });
}
function renderCarrito() {
  carritoUl.innerHTML = "";
  carrito.forEach((item, i)=>{
    const li = document.createElement("li");
    li.innerHTML = `${item.nombre} - €${item.precio} <button data-i="${i}" class="remove">Eliminar</button>`;
    carritoUl.appendChild(li);
  });
  const total = carrito.reduce((s,i)=>s+i.precio,0);
  totalSpan.textContent = total.toFixed(2);
}
productosDiv.addEventListener("click", (e)=> {
  if (e.target.tagName==="BUTTON") {
    const id = parseInt(e.target.dataset.id,10);
    const p = dataProductos.find(x=>x.id===id);
    if (carrito.some(x=>x.id===id)) { alert("Producto ya en carrito"); return; }
    carrito.push(p);
    renderCarrito();
  }
});
carritoUl.addEventListener("click", (e)=>{
  if (e.target.classList.contains("remove")) {
    const i = parseInt(e.target.dataset.i,10);
    carrito.splice(i,1);
    renderCarrito();
  }
});
renderProductos();
