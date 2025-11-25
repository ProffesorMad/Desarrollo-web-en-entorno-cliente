const analizarParametros = (...params) => {

    console.log("Número total de parámetros:", params.length);

    if (params.length > 2) {
        console.log("Antes del intercambio:");
        console.log("Primer parámetro:", params[0]);
        console.log("Tercer parámetro:", params[2]);

        [params[0], params[2]] = [params[2], params[0]];

        console.log("Después del intercambio:");
        console.log("Primer parámetro:", params[0]);
        console.log("Tercer parámetro:", params[2]);
    }

    console.log("--------------------------------");
};

function probar() {
    analizarParametros(1, 2);
    analizarParametros(10, 20, 30);
    analizarParametros("a", "b", "c", "d");
}
