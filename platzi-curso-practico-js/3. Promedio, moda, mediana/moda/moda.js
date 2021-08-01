const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const calcularModa = (elemento) => {
  const lista1Count = {};
  
  elemento.map((elemento) => lista1Count[elemento] ? lista1Count[elemento] += 1 : lista1Count[elemento] = 1);
  const lista1Array = Object.entries(lista1Count).sort((valorAcumulado, nuevoValor) => valorAcumulado[1] - nuevoValor[1] );
  const moda = lista1Array[lista1Array.length - 1];
  return moda;
}

calcularModa(lista1);