const calcularMediaAritmetica = (lista) => {
  let sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
  
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

const lista1 = [2, 100, 500000000, 200, 500, 400000000, 9];
const lista2 = [2, 100, 500000000, 200, 500, 400000000];


const esPar = (numero) => numero % 2 == 0 ? true : false;

const ordenarLista = (lista) => lista.sort((a, b) => a - b );

const calcularMediana = (lista) => {
  ordenarLista(lista);

  const mitadLista = parseInt(lista.length / 2);

  let mediana;

  if(esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];
  
    const promedioElementos = calcularMediaAritmetica([elemento1, elemento2]);
  
    mediana = promedioElementos;
  } else {
    mediana = lista[mitadLista]
  }
  return mediana;
}

console.log(calcularMediana(lista1));
console.log(calcularMediana(lista2));