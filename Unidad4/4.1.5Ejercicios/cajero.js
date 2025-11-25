let saldo = 10000;      
const PIN_CORRECTO = "1234";
let accesoPermitido = false;

const validarPin = () => {
    const inputPin = document.getElementById("pin").value;
    const mensaje = document.getElementById("login-msg");

    if (inputPin === PIN_CORRECTO) {
        accesoPermitido = true;
        mensaje.textContent = "PIN correcto. Bienvenido.";
        mensaje.style.color = "green";
    } else {
        accesoPermitido = false;
        mensaje.textContent = "PIN incorrecto.";
        mensaje.style.color = "red";
    }
};

const consultarSaldo = () => {
    const resultado = document.getElementById("resultado");

    if (!accesoPermitido) {
        resultado.textContent = "Debes validar el PIN primero.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = `Saldo disponible: ${saldo} €`;
    resultado.style.color = "blue";
};

const sacarDinero = () => {
    const cantidad = prompt("¿Cuánto dinero deseas sacar?");
    const resultado = document.getElementById("resultado");

    if (!accesoPermitido) {
        resultado.textContent = "Debes validar el PIN primero.";
        resultado.style.color = "red";
        return;
    }

    const cantidadNum = parseFloat(cantidad);

    if (isNaN(cantidadNum) || cantidadNum <= 0) {
        resultado.textContent = "Cantidad no válida.";
        resultado.style.color = "red";
        return;
    }

    if (cantidadNum > saldo) {
        resultado.textContent = "Fondos insuficientes.";
        resultado.style.color = "red";
        return;
    }

    saldo -= cantidadNum;
    resultado.textContent = `Has sacado ${cantidadNum} €. Nuevo saldo: ${saldo} €`;
    resultado.style.color = "green";
};
