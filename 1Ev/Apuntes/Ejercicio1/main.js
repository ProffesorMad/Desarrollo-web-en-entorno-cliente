// main.js
import Edificio from "./edificio.js";

const edificioA = new Edificio("Garcia Prieto", 58, 15706);
const edificioB = new Edificio("Camino Caneiro", 29, 32004);
const edificioC = new Edificio("San Clemente", "s/n", 15705);

edificioA.agregarPlantasYPuertas(2, 3);

edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

edificioA.imprimePlantas();

edificioA.agregarPlantasYPuertas(1, 3);
edificioA.agregarPropietario("Pedro Meijide", 3, 2);

edificioA.imprimePlantas();
