// ==== VALIDACIONES ======

function validarNombreApellido(text) {
    return text && text.length >= 2 && !(/\d/.test(text));
}

function validarUsuario(usuario) {
    return usuario && usuario.length >= 5 && usuario.length <= 8;
}

function validarEmail(email) {
    return email && email.includes("@");
}

function validarDNI(dni) {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const expr = /^(\d{8})([A-Z])$/i;

    if (!expr.test(dni)) return false;

    const num = parseInt(RegExp.$1);
    const letra = RegExp.$2.toUpperCase();

    return letras[num % 23] === letra;
}

function validarIBAN(iban) {
    return /^ES\d{2}$/i.test(iban);
}

function validarCCC(ccc) {
    return /^\d{20}$/.test(ccc);
}

function validarContrasena(contra) {
    return contra.length > 0;
}

// ==== ELEMENTOS DOM ======

const btnHabilitarBanco = document.getElementById("btnHabilitarBanco");
const btnEnviar = document.getElementById("btnEnviar");
const mensaje = document.getElementById("mensaje");

// ==== EVENTOS =======

// HABILITAR BANCO
btnHabilitarBanco.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("usuario").value;
    const dni = document.getElementById("dni").value;

    if (
        validarNombreApellido(nombre) &&
        validarNombreApellido(apellidos) &&
        validarEmail(email) &&
        validarUsuario(usuario) &&
        validarDNI(dni)
    ) {
        mensaje.textContent = "Datos correctos. Banco habilitado.";
        btnEnviar.disabled = false;
    } else {
        mensaje.textContent = "Error en los datos. Revisa los campos.";
        btnEnviar.disabled = true;
    }
});

// ENVIAR DATOS
btnEnviar.addEventListener("click", () => {
    const iban = document.getElementById("iban").value;
    const ccc = document.getElementById("ccc").value;
    const contrasena = document.getElementById("contrasena").value;

    if (validarIBAN(iban) && validarCCC(ccc) && validarContrasena(contrasena)) {
        mensaje.textContent = "Datos enviados correctamente.";
    } else {
        mensaje.textContent = "Datos bancarios inválidos.";
    }
});
