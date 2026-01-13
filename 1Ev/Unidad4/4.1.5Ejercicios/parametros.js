const procesarParametros = (...params) => {

  console.log("Número total de parámetros recibidos:", params.length);

  if (params.length > 2) {
    console.log("Antes del intercambio:");
    console.log("Primer parámetro:", params[0]);
    console.log("Tercer parámetro:", params[2]);

    [params[0], params[2]] = [params[2], params[0]];

    console.log("Después del intercambio:");
    console.log("Primer parámetro:", params[0]);
    console.log("Tercer parámetro:", params[2]);
  }
};

procesarParametros(10, 20); 
procesarParametros("a", "b", "c", "d");
procesarParametros(1, 2, 3);
