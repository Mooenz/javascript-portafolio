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