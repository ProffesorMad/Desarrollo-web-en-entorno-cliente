const usuarios = [];
const tablaBody = document.querySelector("#tabla tbody");
document.getElementById("submit").addEventListener("click", ()=>{
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const pass = document.getElementById("pass").value;
  const pass2 = document.getElementById("pass2").value;
  const edad = parseInt(document.getElementById("edad").value,10);

  const errores = [];
  if (!nombre || nombre.length < 2 || /\d/.test(nombre)) errores.push("Nombre inválido");
  if (!email.includes("@") || email.length<5) errores.push("Email inválido");
  if (!pass || pass.length < 6) errores.push("Contraseña debe tener al menos 6 caracteres");
  if (pass !== pass2) errores.push("Las contraseñas no coinciden");
  if (!Number.isInteger(edad) || edad < 18) errores.push("Edad mínima 18");

  if (errores.length) { alert("Errores:\n"+errores.join("\n")); return; }
  usuarios.push({ nombre, email, edad });
  actualizarTabla();
});

function actualizarTabla() {
  tablaBody.innerHTML = "";
  usuarios.forEach(u=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${u.nombre}</td><td>${u.email}</td><td>${u.edad}</td>`;
    tablaBody.appendChild(tr);
  });
}
