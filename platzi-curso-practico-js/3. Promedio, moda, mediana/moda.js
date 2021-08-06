const calcularModa = (elemento) => {
  const lista1Count = {};

  elemento.map((elemento) => lista1Count[elemento] ? lista1Count[elemento] += 1 : lista1Count[elemento] = 1);
  const lista1Array = Object.entries(lista1Count).sort((valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1] );
  const moda = lista1Array[lista1Array.length - 1];
  return moda[0];
}