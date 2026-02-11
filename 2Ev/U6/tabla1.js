// Variable global que indica si hay una fila en edición
var editando = false;


// Función que transforma una fila en editable
function transformarEnEditable(nodo) {

    // Si ya hay una fila en edición, mostramos mensaje y salimos
    if (editando) {
        alert("Solo se puede editar una línea. Recargue la página para poder editar otra");
        return;
    }

    // Activamos modo edición
    editando = true;

    // Cambiamos el texto de Editar a En edición
    nodo.innerHTML = "En edición";
    nodo.style.color = "black";
    nodo.removeAttribute("onclick");

    // Obtenemos la fila completa
    var fila = nodo.parentNode.parentNode;

    // Convertimos las celdas (menos la última) en inputs editables
    for (var i = 0; i < fila.cells.length - 1; i++) {

        var contenido = fila.cells[i].innerHTML;

        fila.cells[i].innerHTML =
            "<input type='text' id='campo" + i + "' value='" + contenido + "'>";
    }

    // Añadimos mensaje y botones debajo de la tabla
    var contenedor = document.getElementById("contenedorForm");

    contenedor.innerHTML =
        "Pulse Aceptar para guardar los cambios o cancelar para anularlos <br>" +
        "<button class='boton' onclick='capturarEnvio()'>Aceptar</button>" +
        "<button class='boton' onclick='anular()'>Cancelar</button>";
}


// Función que captura los datos editados y los envía por GET
function capturarEnvio() {

    // Capturamos los valores actuales de los inputs
    var alimento = document.getElementById("campo0").value;
    var calorias = document.getElementById("campo1").value;
    var grasas = document.getElementById("campo2").value;
    var proteina = document.getElementById("campo3").value;
    var carbohidratos = document.getElementById("campo4").value;

    // Creamos un formulario dinámico
    var formulario = document.createElement("form");
    formulario.method = "GET";
    formulario.action = "http://192.168.0.1/"; // URL destino

    // Función auxiliar para crear campos hidden
    function crearHidden(nombre, valor) {
        var input = document.createElement("input");
        input.type = "hidden";
        input.name = nombre;
        input.value = valor;
        formulario.appendChild(input);
    }

    crearHidden("alimento", alimento);
    crearHidden("calorias", calorias);
    crearHidden("grasas", grasas);
    crearHidden("proteina", proteina);
    crearHidden("carbohidratos", carbohidratos);

    // Añadimos el formulario al body y lo enviamos
    document.body.appendChild(formulario);
    formulario.submit();
}


// Función que cancela la edición y recarga la página
function anular() {
    window.location.reload();
}
