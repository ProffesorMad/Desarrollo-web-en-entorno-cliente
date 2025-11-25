function Persona(nombre, apellido, edad, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.email = email;
}

const persona1 = new Persona("Roberto", "Martínez", 22, "roberto.martinez@tuempresa.com");
const persona2 = new Persona("Antonio", "López", 25, "antonio.lopez@tuempresa.com");
const persona3 = new Persona("Javier", "Rodríguez", 18, "javier.rodriguez@tuempresa.com");
const persona4 = new Persona("Eva", "Teruel", 33, "eva.teruel@tuempresa.com");

const personas = [persona1, persona2, persona3, persona4];

function mostrarTabla() {
    const tbody = document.querySelector("#tabla-personas tbody");
    tbody.innerHTML = "";

    personas.forEach(p => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${p.nombre}</td>
            <td>${p.apellido}</td>
            <td>${p.edad}</td>
            <td>${p.email}</td>
        `;

        tbody.appendChild(fila);
    });
}

function calcularMedia() {
    let suma = 0;

    personas.forEach(p => {
        suma += p.edad;
    });

    const media = suma / personas.length;

    document.getElementById("media").textContent =
        "Edad media: " + media.toFixed(2) + " años";
}
