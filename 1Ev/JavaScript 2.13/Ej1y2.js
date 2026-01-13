function pedirNumero(mensaje, min = -Infinity, max = Infinity) {
    let valor;
    do {
        let input = prompt(mensaje);
        if (input === null || input.trim() === "") continue;
        valor = Number(input);
    } while (isNaN(valor) || valor < min || valor > max);
    return valor;
}

function pedirLetra(mensaje) {
    let valor;
    do {
        valor = prompt(mensaje);
        if (!valor || valor.trim() === "") continue; // vacío
        valor = valor.toUpperCase();
    } while (!/^[A-Z]$/.test(valor)); // solo letras de la A a la Z
    return valor;
}

//Crea una aplicación Web que mediante JavaScript calcule la nota de la primera
//evaluación de la asignatura de Desarrollo Web Entorno Cliente.

let notaProyecto = pedirNumero("Introduce la nota del Proyecto (0 a 10):", 0, 10);
let notaExamen = pedirNumero("Introduce la nota del Examen (0 a 10):", 0, 10);

let media = (notaProyecto + notaExamen) / 2;
let calificacion = "";

// Evaluar condiciones
if (notaProyecto < 4.5 || notaExamen < 4.5) {
    calificacion = "SUSPENSO";
} else if (media < 5) {
    calificacion = "SUSPENSO";
} else if (media >= 5 && media < 7) {
    calificacion = "APROBADO";
} else if (media >= 7 && media < 9) {
    calificacion = "NOTABLE";
} else if (media >= 9) {
    calificacion = "SOBRESALIENTE";
}

document.getElementById("1").innerHTML += `
    <p>Proyecto: ${notaProyecto}</p>
    <p>Examen: ${notaExamen}</p>
    <p>Media: ${media.toFixed(2)}</p>
    <p>Calificación: <strong>${calificacion}</strong></p>
`;

//Realiza una aplicación Web, que mediante JavaScript verifique el DNI. Se
//solicitará dos entradas al usuario.

const abecedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 
                     'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

let numeroDNI = pedirNumero("Introduce tu número de DNI (0 a 99999999):", 0, 99999999);
let letraDNI = pedirLetra("Introduce la letra de tu DNI:");
let letraCorrecta = abecedario[numeroDNI % 23];

let mensaje;
if (letraDNI === letraCorrecta) {
    mensaje = `DNI introducido: ${numeroDNI}${letraDNI} → DNI correcto`;
} else {
    mensaje = `DNI introducido: ${numeroDNI}${letraDNI} → DNI incorrecto. Letra correcta: ${letraCorrecta}`;
}

document.getElementById("2").innerHTML += `<p>${mensaje}</p>`;