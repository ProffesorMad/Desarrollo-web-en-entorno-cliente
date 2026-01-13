function pedirNumero(mensaje, min = -Infinity, max = Infinity) {
    let valor;
    do {
        let input = prompt(mensaje);
        if (input === null || input.trim() === "") continue;
        valor = Number(input);
    } while (isNaN(valor) || valor < min || valor > max);
    return valor;
}

function pedirString(mensaje) {
    let valor;
    do {
        valor = prompt(mensaje);
        if (valor === null || valor.trim() === "") continue;
    } while (!isNaN(valor));
    return valor;
}

/*Realiza una aplicación Web, que mediante JavaScript muestre el siguiente aviso.
  Para ello, debes crear una variable de tipo String llamada mensaje.*/

let mensaje = "Hola a todo el Mundo!\nQué fácil es incluir 'comillas simples'\ny \"comillas dobles\"";
alert(mensaje);

/*Realiza una aplicación Web, que mediante JavaScript haga divisiones en binario
  con desplazamiento a la derecha. */

let numeroDiv = pedirNumero("Numero para Dividir Binario:");
let resultadoDiv = numeroDiv >> 1;
document.getElementById("2-2").innerHTML += `
    <p>Decimal: ${resultadoDiv}</p>
    <p>Binario: ${resultadoDiv.toString(2)}</p>
`;

/*Realiza una aplicación Web, que mediante JavaScript haga multiplicaciones en
  binario con desplazamiento a la izquierda */

let numeroMul = pedirNumero("Numero para Multiplicar Binario:");
let desplazamiento = pedirNumero("Cuantos bits desplazar:", 0);
let resultadoMul = numeroMul << desplazamiento;
document.getElementById("2-3").innerHTML += `
    <p>Decimal: ${resultadoMul}</p>
    <p>Binario: ${resultadoMul.toString(2)}</p>
`;

/*Realiza una aplicación Web, que mediante JavaScript muestre por consola, el
  máximo y el valor mas cercano a cero posible con Javascript.Basándote en 
  lo anterior, muestra un
  valor infinito.*/

let maximo = Number.MAX_VALUE;
let minimo = Number.MIN_VALUE;
let infinito = Number.MAX_VALUE * 2;
document.getElementById("2-4").innerHTML += `
    <p>Valor máximo: ${maximo}</p>
    <p>Valor más cercano a cero: ${minimo}</p>
    <p>Valor infinito: ${infinito}</p>
`;

/*Realiza una aplicación Web, que mediante JavaScript compruebe si las cadenas
están escritas en minúsculas, mayúsculas ó ambas. De manera adicional, mejora 
la aplicación anterior, para poder evaluar cualquier
cadena de texto que introduce el usuario. */

let cadena = pedirString("Escribe:");
function comprobarCadena(cadena) {
    if (cadena === cadena.toUpperCase()) return "Está en MAYÚSCULAS";
    if (cadena === cadena.toLowerCase()) return "Está en minúsculas";
    return "Contiene MAYÚSCULAS y minúsculas";
}
document.getElementById("2-5").innerHTML += `<p>${comprobarCadena(cadena)}</p>`;