// EJERCICIO 3
function esPrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let multip3 = [];
let noPrimos = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 3 === 0) multip3.push(i);
  if (!esPrimo(i)) noPrimos++;
}

document.getElementById("ej3").innerHTML = `
Múltiplos de 3:<br>${multip3.join(", ")}<br>
<br>
Cantidad de números NO primos: ${noPrimos}
`;

// EJERCICIO 4
let numeros = [22, 5, 99, 1, 54, 33, 9, 8, 101, 14];
let menor = Math.min(...numeros);
let mayor = Math.max(...numeros);

document.getElementById("ej4").innerHTML = `
Array: ${numeros.join(", ")}<br>
Menor: ${menor}<br>
Mayor: ${mayor}
`;

// EJERCICIO 4 ampliación
let arrUser = [];
for (let i = 0; i < 10; i++) {
  let n = parseInt(prompt("Introduce número " + (i + 1)));
  arrUser.push(n);
}

let menor2 = Math.min(...arrUser);
let mayor2 = Math.max(...arrUser);

document.getElementById("ej4.1").innerHTML = `
Números introducidos: ${arrUser.join(", ")}<br>
Menor: ${menor2}<br>
Mayor: ${mayor2}
`;

// EJERCICIO 5
let tallaEU = prompt("Introduce talla Europea (XXL, XL, L, M, S, XS, XXS):").toUpperCase().trim();

let resultadoTalla = "";

switch(tallaEU){
  case "XXL":
  case "XL":
  case "L":
    resultadoTalla = "Grande";
    break;
  
  case "M":
    resultadoTalla = "Mediana";
    break;

  case "S":
  case "XS":
  case "XXS":
    resultadoTalla = "Pequeña";
    break;

  default:
    resultadoTalla = "Talla no reconocida";
}

document.getElementById("ej5").innerHTML = `
Talla europea introducida: ${tallaEU}<br>
Resultado: ${resultadoTalla}
`;

// EJERCICIO 6
let radio = parseFloat(prompt("Introduce valor del radio:"));
let longitud = 2 * Math.PI * radio;

document.getElementById("ej6").innerHTML = `
Radio: ${radio}<br>
Longitud = ${longitud}
`;


// EJERCICIO 7

function aleatorio(min, max){
  return Math.ceil(Math.random() * (max - min + 1) + min - 1);
}

let numerosE = [];
let estrellas = [];

while(numerosE.length < 5){
  let n = aleatorio(1,50);
  if(!numerosE.includes(n)) numerosE.push(n);
}

while(estrellas.length < 2){
  let e = aleatorio(1,10);
  if(!estrellas.includes(e)) estrellas.push(e);
}

document.getElementById("ej7").innerHTML = `
Números: ${numerosE.join(" - ")}<br>
Estrellas: ${estrellas.join(" - ")}
`;

// EJERCICIO 8 
let filas = parseInt(prompt("Introduce nº de filas"));
let columnas = parseInt(prompt("Introduce nº de columnas"));

let salida = "";

for(let i = filas; i >= 1; i--){
  for(let j = 1; j <= columnas; j++){
    salida += `(${i},${j}) `;
  }
}

document.getElementById("ej8").innerHTML = salida;

// EJERCICIO 9

let valor = "";  
let operacion = "";      
let numeroAnterior = ""; 

function num(n){
    valor += n;
    document.getElementById("pantalla").value = valor;
    document.getElementById("historial").value = numeroAnterior + " " + operacion + " " + valor;
}

function oper(op){
    numeroAnterior = valor;
    operacion = op;
    valor = "";
    document.getElementById("pantalla").value = "";
    document.getElementById("historial").value = numeroAnterior + " " + operacion;
}

function calcular(){
    let numeroActual = parseFloat(valor);
    let primero = parseFloat(numeroAnterior);
    let resultado = 0;

    switch(operacion){
        case "+": resultado = primero + numeroActual; break;
        case "-": resultado = primero - numeroActual; break;
        case "*": resultado = primero * numeroActual; break;
        case "/": resultado = primero / numeroActual; break;
    }

    document.getElementById("pantalla").value = resultado;
    document.getElementById("historial").value = primero + " " + operacion + " " + numeroActual + " =";

    valor = "" + resultado;
}

function borrar(){
    valor = "";
    operacion = "";
    numeroAnterior = "";
    document.getElementById("pantalla").value = "";
    document.getElementById("historial").value = "";
}

function raiz(){
    let r = Math.sqrt(parseFloat(valor));
    document.getElementById("pantalla").value = r;
    document.getElementById("historial").value = `√${valor} =`;
    valor = "" + r;
}

// EJERCICIO 10 

function myfunction9(){
    document.getElementById("demo9").innerHTML += 
    "<br><br>...centro, para que a cualquier persona de nuestra comunidad educativa le resulte mas accesible realizar su donación de sangre." +
    "<br>La siguiente donación será:" +
    "<br>Fecha: Martes 3 de octubre." +
    "<br>Lugar: Biblioteca del IES" +
    "<br>Horario: de 9:30 a 13:00 horas" +
    "<br><br>Recordad que TODOS EN CUALQUIER MOMENTO PODEMOS NECESITAR SANGRE";
}