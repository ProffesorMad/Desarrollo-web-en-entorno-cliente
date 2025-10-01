//Datos personales y año de nacimiento

let nombre = prompt("Nombre:");
let apellido = prompt("Apellido:");
let fullName = nombre + " " + apellido;

let edad = parseInt(prompt("Edad:"));
let diaNacimiento = parseInt(prompt("Día de nacimiento (1-31):"));
let mesNacimiento = parseInt(prompt("Mes de nacimiento (1-12):"));

let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
let mesActual = fechaActual.getMonth() + 1;
let diaActual = fechaActual.getDate();

let year = añoActual - edad;
if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) {
    year -= 1;
}

document.getElementById("1").innerHTML += 
    "<p>Nombre completo: " + fullName + "</p>" +
    "<p>Año de nacimiento: " + year + "</p>";

//Calcula el exponencial de cualquier número

let numeroExp = parseFloat(prompt("Calcular su exponencial:"));
let resultadoExp = Math.exp(numeroExp);

document.getElementById("2").innerHTML += 
    "<p>El exponencial de " + numeroExp + " es: " + resultadoExp + "</p>";

/*Crea un script para calcular números pares e impares. Los números se introducen 
    por teclado y emplear el módulo %. */

let numeroParImpar = parseInt(prompt("¿Par o Impar?:"));
let resultadoParImpar = (numeroParImpar % 2 === 0) ? "Par" : "Impar";

document.getElementById("3").innerHTML += 
    "<p>El número " + numeroParImpar + " es " + resultadoParImpar + "</p>";


//Detectar si un número es múltiplo de otro número.

let num1Multiplo = parseInt(prompt("Primer multiplo:"));
let num2Multiplo = parseInt(prompt("Segundo multiplo:"));
let resultadoMultiplo;

if (num2Multiplo === 0) {
    resultadoMultiplo = "No se puede dividir entre 0";
} else if (num1Multiplo % num2Multiplo === 0) {
    resultadoMultiplo = num1Multiplo + " es múltiplo de " + num2Multiplo;
} else {
    resultadoMultiplo = num1Multiplo + " no es múltiplo de " + num2Multiplo;
}

document.getElementById("4").innerHTML += "<p>" + resultadoMultiplo + "</p>";

//Crea un Array que almacene los 12 meses del año y muestra cada mes empleando un for

let meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

document.getElementById("5").innerHTML += meses.join(", ");


//Compara dos números enteros para saber cual es mayor. Además comprueba si son positivos

let numA = parseInt(prompt("Primer número para comparar:"));
let numB = parseInt(prompt("Segundo número para comparar:"));

let comparacion;
if (numA > numB) {
    comparacion = numA + " es mayor que " + numB;
} else if (numB > numA) {
    comparacion = numB + " es mayor que " + numA;
} else {
    comparacion = "Ambos números son iguales";
}

function signo(num) {
    if (num > 0) return "positivo";
    else if (num < 0) return "negativo";
    else return "cero";
}

document.getElementById("6").innerHTML += 
    "<p>" + comparacion + "</p>" +
    "<p>" + numA + " es " + signo(numA) + "</p>" +
    "<p>" + numB + " es " + signo(numB) + "</p>";

//Muestra en el documento HTML los 30 primeros números

let numeros30 = [];
for (let i = 1; i <= 30; i++) {
    numeros30.push(i);
}

document.getElementById("7").innerHTML += "<p>" + numeros30.join(", ") + "</p>";
