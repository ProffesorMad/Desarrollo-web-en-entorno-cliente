import centro from "./Centrocomercial.js";

const centroA = new centro("Aragonia","Avenida Juan Pablo II", 34, 50009);

centroA.agregarPlantasYLocales(2, 3);

centroA.asignarTiendas("Zara", 1, 1);
centroA.asignarTiendas("Primark", 1, 2);
centroA.asignarTiendas("Game", 1, 3);
centroA.asignarTiendas("Primor", 2, 2);

centroA.imprimeLocales();



