let tablaMultiplicar = "";
for (let i = 1; i <= 10; i++) {
    tablaMultiplicar += `7 x ${i} = ${7 * i}<br>`;
}
document.getElementById("1").innerHTML += `<p>${tablaMultiplicar}</p>`;

let tablaSumar = "";
let j = 1;
while (j <= 10) {
    tablaSumar += `8 + ${j} = ${8 + j}<br>`;
    j++;
}
document.getElementById("2").innerHTML += `<p>${tablaSumar}</p>`;

let tablaDividir = "";
let k = 1;
do {
    tablaDividir += `9 / ${k} = ${9 / k}<br>`;
    k++;
} while (k <= 10);
document.getElementById("3").innerHTML += `<p>${tablaDividir}</p>`;

let op1 = 125 >> 3; 
let op2 = 25 >> 1; 
let op3 = 40 << 2;  
let op4 = 10 << 4; 

let resultadosBits = `
<p>125 / 8 con desplazamiento de bits = ${op1}</p>
<p>25 / 2 con desplazamiento de bits = ${op2}</p>
<p>40 x 4 con desplazamiento de bits = ${op3}</p>
<p>10 x 16 con desplazamiento de bits = ${op4}</p>
`;

document.getElementById("4").innerHTML += resultadosBits;
