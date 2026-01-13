function validarNombreApellido(text) {
  return text && text.trim().length >= 2 && !(/\d/.test(text));
}

function validarUsuario(usuario) {
  return usuario && usuario.length >= 5 && usuario.length <= 8;
}

function validarEmail(correo) {
  return correo && correo.includes("@");
}

function validarDNI(dni) {
  const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
  const expr = /^(\d{8})([A-Z])$/i;
  const match = dni.toUpperCase().match(expr);
  if (!match) return false;
  const num = parseInt(match[1], 10);
  const letra = match[2];
  return letras[num % 23] === letra;
}

function validarIBAN(iban) {
  if (!iban) return false;
  iban = iban.replace(/\s+/g, "").toUpperCase();
  return /^ES\d{2}$/.test(iban);
}

function validarCCC(ccc) {
  if (!ccc) return false;
  ccc = ccc.replace(/\s+/g, "");
  return /^\d{20}$/.test(ccc);
}

function validarContrasena(contra) {
  return contra && contra.length > 0;
}

let modoValidacion = false;

document.addEventListener("DOMContentLoaded", function () {
  alert(
    "Todos los campos son obligatorios.\n\n" +
    "REQUISITOS:\n" +
    "- Nombre: mínimo 2 caracteres, sin números.\n" +
    "- Apellidos: mínimo 2 caracteres, sin números.\n" +
    "- Email: debe contener '@'.\n" +
    "- Usuario: entre 5 y 8 caracteres.\n" +
    "- DNI: 8 dígitos + letra válida.\n" +
    "- IBAN: ES + 2 dígitos.\n" +
    "- CCC: 20 dígitos.\n" +
    "- Contraseña: no puede estar vacía."
  );

  const boton1 = document.getElementById("boton1");
  const boton2 = document.getElementById("boton2");
  boton2.disabled = true;

  boton1.addEventListener("click", function (e) {
    e.preventDefault();
    modoValidacion = true;
    validarDatos();
    modoValidacion = false;
  });
});

function validarDatos() {
  if (!modoValidacion) return;

  const nombre = document.getElementById("nombre").value.trim();
  const apellidos = document.getElementById("apellidos").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const usuario = document.getElementById("usuario").value.trim();
  const dni = document.getElementById("dni").value.trim();
  const boton2 = document.getElementById("boton2");

  if (!nombre) {
    alert("El nombre es obligatorio y debe tener al menos 2 caracteres sin números.");
    boton2.disabled = true;
    return;
  }

  if (!validarNombreApellido(nombre)) {
    alert("El nombre debe tener al menos 2 caracteres y no contener números.");
    boton2.disabled = true;
    return;
  }

  if (!apellidos) {
    alert("Los apellidos son obligatorios y deben tener al menos 2 caracteres sin números.");
    boton2.disabled = true;
    return;
  }

  if (!validarNombreApellido(apellidos)) {
    alert("Los apellidos deben tener al menos 2 caracteres y no contener números.");
    boton2.disabled = true;
    return;
  }

  if (!correo) {
    alert("El email es obligatorio y debe contener '@'.");
    boton2.disabled = true;
    return;
  }

  if (!validarEmail(correo)) {
    alert("El email debe contener '@'.");
    boton2.disabled = true;
    return;
  }

  if (!usuario) {
    alert("El usuario es obligatorio y debe tener entre 5 y 8 caracteres.");
    boton2.disabled = true;
    return;
  }

  if (!validarUsuario(usuario)) {
    alert("El usuario debe tener entre 5 y 8 caracteres.");
    boton2.disabled = true;
    return;
  }

  if (!dni) {
    alert("El DNI es obligatorio y debe tener 8 números y una letra.");
    boton2.disabled = true;
    return;
  }

  if (!validarDNI(dni)) {
    alert("El DNI debe tener 8 números y una letra válida.");
    boton2.disabled = true;
    return;
  }

  boton2.disabled = false;
}

function valida() {
  const iban = document.getElementById("iban").value.trim();
  const ccc = document.getElementById("ccc").value.trim();
  const contrasena = document.getElementById("pass").value.trim();

  if (!iban) {
    alert("El IBAN es obligatorio y debe comenzar por ES y tener 2 dígitos.");
    return false;
  }

  if (!validarIBAN(iban)) {
    alert("IBAN incorrecto. Debe comenzar por ES y tener 24 caracteres en total (ES + 2 dígitos).");
    return false;
  }

  if (!ccc) {
    alert("El CCC es obligatorio y debe tener exactamente 20 dígitos.");
    return false;
  }

  if (!validarCCC(ccc)) {
    alert("El CCC debe contener exactamente 20 dígitos.");
    return false;
  }

  if (!contrasena) {
    alert("La contraseña es obligatoria y no puede estar vacía.");
    return false;
  }

  if (!validarContrasena(contrasena)) {
    alert("La contraseña no puede estar vacía.");
    return false;
  }

  alert("Datos enviados correctamente.");
  return true;
}

function datosBancarios() {
  valida();
}
