const cont = document.getElementById("mensajes");
const texto = document.getElementById("texto");

document.getElementById("enviar").addEventListener("click", ()=>{
  const v = texto.value.trim();
  if (!v) { alert("No enviar vacío"); return; }
  const p = document.createElement("div");
  p.textContent = `${new Date().toLocaleTimeString()} - ${v}`;
  cont.appendChild(p);
  texto.value = "";
  cont.scrollTop = cont.scrollHeight;
});

document.getElementById("borrar").addEventListener("click", ()=> cont.innerHTML = "");
