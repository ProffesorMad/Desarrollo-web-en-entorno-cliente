let varTablero; //VARIABLE A USAR LUEGO
let piezas = ["♖","♘","♗","♕","♔","♗","♘","♖"] // ARRAY CON LAS PIEZAS ORDENADAS
let peon = "♙"; // VARIBALE DE PEONES

/* CREAMOS EL TABLERO */
onload = function tablero() {
 /* REFERIMOS LA TABLA VACÍA EN UNA VARIABLE */
 varTablero = document.getElementById("tablero");

 /* CREA EN LA TABLA 8 FILAS CON DO WHILE */
 let i = 0;
 do {

   /* INSERTA CADA FILA DEL TABLERO EN UNA NUEVA VARIABLE FILA: .insertRow(0), .insertRow(1)....*/
   let fila = varTablero.insertRow(i);
  
   /* CREA EN CADA FILA 8 CELDAS. EMPLEA FOR  */
   for (let j = 0; j < 8; j++) {

     /* INSERTA TODAS LAS CELDAS EN SU CORRESPONDIENTES 8 FILAS (a modo de columnas) .insertCell(0), .insertCell(1)*/
     let celda = fila.insertCell(j);

     /* AHORA QUE TENEMOS EL TABLERO CONSTRUIDO DE 8X8; CON INNERHTML Y EMPLEADO SWITCH-CASE RELLENA LAS FILAS 0 Y 7 CON LAS PIEZAS CORRESPONDIENTES Y LAS FILAS 1 Y 6 CON LOS PEONES*/
     switch (i) {
       case 0:
         celda.innerHTML = `<span class="negras">${piezas[j]
           .replace("♖","♜")
           .replace("♘","♞")
           .replace("♗","♝")
           .replace("♕","♛")
           .replace("♔","♚")}</span>`;
         break;
       case 1:
         celda.innerHTML = `<span class="negras">♟</span>`;
         break;
       case 6:
         celda.innerHTML = `<span class="blancas">${peon}</span>`;
         break;
       case 7:
         celda.innerHTML = `<span class="blancas">${piezas[j]}</span>`;
         break;
     }
   }

   i++;
 } while (i < 8);
}