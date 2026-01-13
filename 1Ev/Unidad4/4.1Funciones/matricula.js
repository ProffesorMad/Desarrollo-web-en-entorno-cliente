class Matricula {
    constructor(codigo) {
        this.codigo = codigo;
    }

    esValida() {
        if (this.codigo.length !== 6) return false;

        const numeros = this.codigo.slice(0, 5);
        const letra = this.codigo.charAt(5).toUpperCase();

        // Verificar que los primeros 5 sean números
        if (!/^\d{5}$/.test(numeros)) return false;

        // Primer número impar
        if (parseInt(numeros.charAt(0)) % 2 === 0) return false;

        // Letra debe ser P o S
        if (letra !== "P" && letra !== "S") return false;

        return true;
    }
}

function validarMatricula() {
    const entrada = document.getElementById("matricula-input").value;
    const matricula = new Matricula(entrada);
    const resultado = document.getElementById("resultado");

    if (matricula.esValida()) {
        resultado.textContent = "✔ Matrícula válida";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "✖ Matrícula NO válida";
        resultado.style.color = "red";
    }
}
