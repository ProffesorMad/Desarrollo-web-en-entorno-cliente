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

export { mostrarPresupuesto, actualizarPresupuesto, CrearGasto };
