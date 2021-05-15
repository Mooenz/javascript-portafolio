const fs = require('fs');
const util = require('util');

const ordenamientoPorInsercion = (datos) => {
  console.time();
  let i, j;
  let auxiliar, actual, movimientos = 0;
  
  for (i = 1; i < datos.length; i += 1) {
    actual = datos[i];
    for (j = i; j > 0; j -= 1) {
      if (actual < datos[j-1]) {
        auxiliar = datos[j-1];
        datos[j-1] = datos[j];
        datos[j] = auxiliar;
        movimientos += 1;
      }
    } 
  }
  console.timeEnd();
  return `En ${movimientos} movimientos para ordenamiento por insercion`;
}

fs.readFile('registros_300.csv', 'utf-8',(err, data) => {
  if(err) {
    console.log('error: ', err);
  } else {
    const ordenarArrayNombres = () => {
      let arrayNombres = data.split('\r\n');
      console.log(ordenamientoPorInsercion(arrayNombres));
    }
    ordenarArrayNombres();
  }
})