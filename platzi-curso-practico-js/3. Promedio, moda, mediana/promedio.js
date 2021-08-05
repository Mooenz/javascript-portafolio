const lista1 = [100, 200, 300, 500];


const calcularMediaAritmetica = (lista) => {
  let sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
  
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

console.log(calcularMediaAritmetica(lista1));