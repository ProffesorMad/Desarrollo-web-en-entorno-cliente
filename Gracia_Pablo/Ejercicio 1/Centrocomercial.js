class centro {
  constructor(nombre, calle, numero, codigoPostal) {
    this.nombre = nombre
    this.calle = calle;
    this.numero = numero;
    this.codigoPostal = codigoPostal;
    this.plantas = [];
    console.log(`Construido nuevo centro comercial: ${this.nombre}, ${this.calle}, nº: ${this.numero}, CP: ${this.codigoPostal}.`);
  }

  agregarPlantasYLocales(numPlantas, numLocales) {
    for (let p = 0; p < numPlantas; p++) {
      this.plantas.push(new Array(numLocales).fill(null));
    }
    console.log(`Agregamos ${numPlantas} plantas con ${numLocales} locales por planta`);
  }

  modificarNombre(nuevoNombre) {
    this.nombre = nuevoNombre;
  }

  modificarDireccion(nuevaCalle, nuevoNumero, nuevoCP) {
    this.calle = nuevaCalle;
    this.numero = nuevoNumero;
    this.codigoPostal = nuevoCP;
  }

  imprimeNombre() { return this.nombre; }
  imprimeCalle() { return this.calle; }
  imprimeNumero() { return this.numero; }
  imprimeCodigoPostal() { return this.codigoPostal; }

  asignarTiendas(nombre, planta, local){
    const p = planta - 1;
    const lo = local - 1;

    this.plantas[p][lo] = nombre;
    console.log(`${nombre} es ahora la tienda del local ${local} en la planta ${planta}.`);
  }

  imprimeLocales() {
    console.log(`Listado de tiendas del centro comercial ${this.nombre}`);
    this.plantas.forEach((planta, i) => {
      planta.forEach((loc, j) => {
        console.log(`Tienda del local ${j + 1} de la planta ${i + 1}: ${loc ?? "(vacío)"}.`);
      });
    });
  }
  

}

export default centro;
