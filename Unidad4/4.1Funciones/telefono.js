class TelefonoFijo {
    constructor(numero) {
        this.numero = numero;
    }

    esValido() {
        // Debe tener 9 dígitos
        if (!/^\d{9}$/.test(this.numero)) return false;

        // Empieza por 8 o 9
        if (!(this.numero.startsWith("8") || this.numero.startsWith("9"))) {
            return false;
        }

        // No puede haber "00" en la posición 2 y 3
        if (this.numero.substr(1, 2) === "00") return false;

        return true;
    }
}

function validarTelefono() {
    const entrada = document.getElementById("telefono-input").value;
    const telefono = new TelefonoFijo(entrada);
    const resultado = document.getElementById("resultado");

    if (telefono.esValido()) {
        resultado.textContent = "✔ Teléfono válido";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "✖ Teléfono NO válido";
        resultado.style.color = "red";
    }
}
