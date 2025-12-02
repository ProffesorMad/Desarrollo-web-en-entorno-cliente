let presupuestoGlobal = 0;

function actualizarPresupuesto(pres) {
    if (pres >= 0) {
        presupuestoGlobal = pres;
        return presupuestoGlobal;
    }
    return -1;
}

function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuestoGlobal} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {

    this.descripcion = descripcion;
    this.valor = valor >= 0 ? valor : 0;
    this.fecha = fecha;
    this.etiquetas = etiquetas;

    this.mostrarGasto = function () {
        return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`; 
    };

    this.actualizarDescripcion = function (desc) {
        this.descripcion = desc;
    };

    this.actualizarValor = function (nuevoValor) {
        if (nuevoValor >= 0) {
            this.valor = nuevoValor;
        }
    };
}

window.btnActualizarPresupuesto = function () {
    const pres = Number(document.getElementById("presupuestoInput").value);
    const result = actualizarPresupuesto(pres);

    if (result === -1) {
        alert("El presupuesto no puede ser negativo.");
    }

    document.getElementById("presupuestoActual").innerText = mostrarPresupuesto();
};

window.btnCrearGasto = function () {
    const d = document.getElementById("desc").value;
    const v = Number(document.getElementById("valor").value);
    const f = document.getElementById("fecha").value;
    const e = document.getElementById("etiquetas").value.split(",").map(t => t.trim());

    const gasto = new CrearGasto(d, v, f, ...e);

    presupuestoGlobal -= gasto.valor;
    document.getElementById("presupuestoActual").innerText = mostrarPresupuesto();

    const div = document.createElement("div");
    div.className = "gasto";
    div.innerText = gasto.mostrarGasto();

    document.getElementById("listaGastos").appendChild(div);
};

document.getElementById("presupuestoActual").innerText = mostrarPresupuesto();
