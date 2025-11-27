let presupuesto = 0;

function actualizarPresupuesto(pres) {
  if (typeof pres !== 'number' || Number.isNaN(pres)) {
    throw new TypeError('El presupuesto debe ser un número');
  }
  if (pres >= 0) {
    presupuesto = pres;
    return presupuesto;
  }
  return -1;
}

function mostrarPresupuesto() {
  return `Tu presupuesto actual es de ${presupuesto} €`;
}

function CrearGasto(descripcion, valor, fecha, ...etiquetas) {
  if (typeof descripcion !== 'string') {
    throw new TypeError('La descripción debe ser un texto');
  }
  this.descripcion = descripcion;
  this.valor = (typeof valor === 'number' && !Number.isNaN(valor) && valor >= 0) ? valor : 0;
  this.fecha = fecha instanceof Date ? fecha : (fecha ? new Date(fecha) : null);
  this.etiquetas = Array.isArray(etiquetas) ? etiquetas : [];
}

CrearGasto.prototype.mostrarGasto = function () {
  return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.`;
};

CrearGasto.prototype.actualizarDescripcion = function (desc) {
  if (typeof desc !== 'string') {
    throw new TypeError('La descripción debe ser un texto');
  }
  this.descripcion = desc;
};

CrearGasto.prototype.actualizarValor = function (val) {
  if (typeof val !== 'number' || Number.isNaN(val)) {
    throw new TypeError('El valor debe ser un número');
  }
  if (val >= 0) {
    this.valor = val;
  }
};

export { mostrarPresupuesto, actualizarPresupuesto, CrearGasto };
