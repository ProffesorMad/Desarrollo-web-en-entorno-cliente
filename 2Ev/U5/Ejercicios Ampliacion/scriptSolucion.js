// CARGA INICIAL DE LA PÁGINA
window.onload = function () {

  let formulario = document.getElementById("formulario");

  // Pasar nombre y apellidos a mayúsculas al perder el foco
  document.getElementById("nombre").addEventListener("blur", pasarMayusculas);
  document.getElementById("apellidos").addEventListener("blur", pasarMayusculas);

  // Validación del formulario al enviarlo
  formulario.addEventListener("submit", validarFormulario);

  // Inicializar contador de intentos
  inicializarIntentos();
};


// GESTIÓN DE COOKIES (INTENTOS)

function inicializarIntentos() {

  // Si no existe la cookie, se crea
  if (getCookie("intentos") === "") {
    setCookie("intentos", 0);
  }
  mostrarIntentos();
}

function incrementarIntentos() {

  // Aumenta el número de intentos en la cookie
  let intentos = parseInt(getCookie("intentos"));
  intentos++;
  setCookie("intentos", intentos);
  mostrarIntentos();
}

function mostrarIntentos() {

  // Muestra los intentos en el div correspondiente
  document.getElementById("intentos").innerHTML =
    "Intentos de envío del formulario: " + getCookie("intentos");
}

// Crear cookie
function setCookie(nombre, valor) {
  document.cookie = nombre + "=" + valor + ";path=/";
}

// Leer cookie
function getCookie(nombre) {
  let cookies = document.cookie.split("; ");
  for (let i = 0; i < cookies.length; i++) {
    let partes = cookies[i].split("=");
    if (partes[0] === nombre) {
      return partes[1];
    }
  }
  return "";
}

// FUNCIONES AUXILIARES

function pasarMayusculas() {

  // Convierte el texto a mayúsculas
  this.value = this.value.toUpperCase();
}

function mostrarError(mensaje, campo) {

  // Muestra el error y pone el foco en el campo
  document.getElementById("errores").innerHTML = mensaje;
  campo.focus();
}


// VALIDACIÓN DEL FORMULARIO
function validarFormulario(event) {

  // Sumar intento cada vez que se envía
  incrementarIntentos();

  // Obtener campos del formulario
  let nombre = document.getElementById("nombre");
  let apellidos = document.getElementById("apellidos");
  let edad = document.getElementById("edad");
  let nif = document.getElementById("nif");
  let email = document.getElementById("email");
  let provincia = document.getElementById("provincia");
  let fecha = document.getElementById("fecha");
  let telefono = document.getElementById("telefono");
  let hora = document.getElementById("hora");

  // Validar nombre
  if (nombre.value.trim() === "") {
    event.preventDefault();
    mostrarError("El nombre es obligatorio", nombre);
    return;
  }

  // Validar apellidos
  if (apellidos.value.trim() === "") {
    event.preventDefault();
    mostrarError("Los apellidos son obligatorios", apellidos);
    return;
  }

  // Validar edad (número entre 0 y 105)
  if (!/^\d+$/.test(edad.value) || edad.value < 0 || edad.value > 105) {
    event.preventDefault();
    mostrarError("Edad incorrecta", edad);
    return;
  }

  // Validar NIF (8 números - letra)
  let expNif = /^\d{8}-[A-Za-z]$/;
  if (!expNif.test(nif.value)) {
    event.preventDefault();
    mostrarError("NIF incorrecto", nif);
    return;
  }

  // Validar email
  let expEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (!expEmail.test(email.value)) {
    event.preventDefault();
    mostrarError("Email incorrecto", email);
    return;
  }

  // Validar provincia seleccionada
  if (provincia.value === "0") {
    event.preventDefault();
    mostrarError("Seleccione una provincia", provincia);
    return;
  }

  // Validar fecha (dd/mm/aaaa o dd-mm-aaaa)
  let expFecha = /^\d{2}[\/-]\d{2}[\/-]\d{4}$/;
  if (!expFecha.test(fecha.value)) {
    event.preventDefault();
    mostrarError("Fecha incorrecta", fecha);
    return;
  }

  // Validar teléfono (9 dígitos)
  let expTelefono = /^\d{9}$/;
  if (!expTelefono.test(telefono.value)) {
    event.preventDefault();
    mostrarError("Teléfono incorrecto", telefono);
    return;
  }

  // Validar hora (hh:mm)
  let expHora = /^\d{2}:\d{2}$/;
  if (!expHora.test(hora.value)) {
    event.preventDefault();
    mostrarError("Hora incorrecta", hora);
    return;
  }

  // Confirmación final de envío
  if (!confirm("¿Desea enviar el formulario?")) {
    event.preventDefault();
  }
}
