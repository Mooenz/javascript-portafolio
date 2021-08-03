// Helpers
const calcularMediaAritmetica = (lista) => {
  let sumaLista = lista.reduce(
    (valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento
  );

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
};

// Crear array de los salarios
const salariosCol = colombia.map((persona) => {
  return persona.salary;
});

// Ordenar los salarios
const salariosColSorted = salariosCol.sort((salarioA, salarioB) => {
  return salarioA - salarioB;
});

// Saber si es par o inpar
const esPar = (numero) => (numero % 2 == 0 ? true : false);

// Calculadora mediana
const medianaSalarios = (lista) => {
  let respuestaMedianaSalarios;
  const mitad = parseInt(lista.length / 2);
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];
    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
};

const medianaGeneralCol = medianaSalarios(salariosColSorted);

// Mediana del top 10%

const spliceInicial = (salariosColSorted.length * 90) / 100;
const spliceContador = salariosColSorted.length - spliceInicial;

const salariosColTop10 = salariosColSorted.splice(spliceInicial, spliceContador);
const medianaTop10Col = medianaSalarios(salariosColTop10);

console.log({
  medianaGeneralCol,
  medianaTop10Col
});

