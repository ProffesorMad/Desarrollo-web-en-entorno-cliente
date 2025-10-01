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

let numeroE = parseFloat(prompt("Calcular su exponencial:"));
let resultadoE = Math.exp(numeroE);

document.getElementById("2").innerHTML += 
    "<p>El exponencial de " + numeroE + " es: " + resultadoE + "</p>";

/*Crea un script para calcular números pares e impares. Los números se introducen 
    por teclado y emplear el módulo %. */

let numeroImPa = parseInt(prompt("¿Par o Impar?:"));
let resultadoImPa = (numeroImPa % 2 === 0) ? "Par" : "Impar";

document.getElementById("3").innerHTML += 
    "<p>El número " + numeroImPa + " es " + resultadoImPa + "</p>";


//Detectar si un número es múltiplo de otro número.

let num1M = parseInt(prompt("Primer multiplo:"));
let num2M = parseInt(prompt("Segundo multiplo:"));
let resultadoM;

if (num2M === 0) {
    resultadoM = "No se puede dividir entre 0";
} else if (num1M % num2M === 0) {
    resultadoM = num1M + " es múltiplo de " + num2M;
} else {
    resultadoM = num1M + " no es múltiplo de " + num2M;
}

document.getElementById("4").innerHTML += "<p>" + resultadoM + "</p>";

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

/*Muestra en el documento HTML el factorial de un número que se inserta por teclado. 
  Declara dos variables: para el número y para el resultado. Emplea un formulario */ 