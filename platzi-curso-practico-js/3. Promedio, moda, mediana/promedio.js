const calcularMediaAritmetica = (lista) => {
  let sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento);
  
  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}