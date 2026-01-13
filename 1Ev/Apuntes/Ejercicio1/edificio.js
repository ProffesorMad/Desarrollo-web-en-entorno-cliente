// edificio.js

class Edificio {
  constructor(calle, numero, codigoPostal) {
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];
    console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
  }

  agregarPlantasYPuertas(numPlantas, puertas) {
    for (let p = 0; p < numPlantas; p++) {
      this.plantas.push(new Array(puertas).fill(null));
    }
    console.log(`Agregamos ${numPlantas} plantas y ${puertas} puertas por planta al edificio ${this.calle} número ${this.numero}...`);
  }

  modificarNumero(nuevoNumero) {
    this.numero = nuevoNumero;
  }

  modificarCalle(nuevaCalle) {
    this.calle = nuevaCalle;
  }

  modificarCodigoPostal(nuevoCP) {
    this.codigoPostal = nuevoCP;
  }

  imprimeCalle() { return this.calle; }
  imprimeNumero() { return this.numero; }
  imprimeCodigoPostal() { return this.codigoPostal; }

  agregarPropietario(nombre, planta, puerta) {
    const p = planta - 1;
    const pu = puerta - 1;

    if (!this.plantas[p] || pu < 0 || pu >= this.plantas[p].length) {
      console.log(`No existe la planta ${planta} o la puerta ${puerta}`);
      return;
    }

    this.plantas[p][pu] = nombre;
    console.log(`${nombre} es ahora el propietario de la puerta ${puerta} de la planta ${planta}.`);
  }

  imprimePlantas() {
    console.log(`Listado de propietarios del edificio calle ${this.calle} número ${this.numero}`);
    this.plantas.forEach((planta, i) => {
      planta.forEach((prop, j) => {
        console.log(`Propietario del piso ${j + 1} de la planta ${i + 1}: ${prop ?? "(vacío)"}.`);
      });
    });
  }
}

// Para poder importarlo en otro archivo:
export default Edificio;
