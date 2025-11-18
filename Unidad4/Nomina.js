function nomina(salarioBruto, retencion, numeroPagas) {

    let salarioNetoAnual = salarioBruto - (salarioBruto * (retencion / 100));
    return salarioNetoAnual / numeroPagas;
}

function calcularNomina() {
    
    let salario = parseFloat(document.getElementById("salario").value);
    let retencion = parseFloat(document.getElementById("retencion").value);
    let pagas = parseInt(document.getElementById("pagas").value);

    let resultado = nomina(salario, retencion, pagas);

    document.getElementById("resultado").innerHTML =
        "Salario neto por paga: <strong>" + resultado.toFixed(2) + " €</strong>";
}
