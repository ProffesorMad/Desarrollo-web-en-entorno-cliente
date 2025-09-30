/*Crea una aplicación que solicitar el nombre al usuario y lo guardará en una variable 
    denominada nombre. Solicitar el primer apellido al usuario y lo guardará
    en una variable denominada apellido.
  Almacenaremos en una nueva variable denominada fullName, el nombre y primer apellido 
    registrado separados por un espacio.
  Solicitar la edad al usuario y lo guardas en una variable denominada edad. Calcular 
    y asignar a una nueva variable Nacimiento, el año de nacimiento del usuario 
    (sin tener en cuenta el mes de nacimiento)
  Mostrar en el cuadro de resultados del editor la siguiente información (una en
    cada línea):
        - Nombre completo: (valor de la variable fullName)
        - Año de nacimiento: (valor de la variable year)*/

        // op1.js

// Nombre y Apellido
let nombre = prompt("Introduce tu nombre:");
let apellido = prompt("Introduce tu primer apellido:");

// Separados
let fullName = nombre + " " + apellido;

// Edad
let edad = prompt("Introduce tu edad:");

// Edad a numero
edad = parseInt(edad);

// Año nacimiento
let fechaActual = new Date();
let añoActual = fechaActual.getFullYear();
let year = añoActual - edad;

// Resultados
document.write("<p>Nombre completo: " + fullName + "</p>");
document.write("<p>Año de nacimiento: " + year + "</p>");
