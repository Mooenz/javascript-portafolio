const fs = require('fs');

const ordenamientoPorInsercion = (...datos) => {
  let auxiliar;
  const length = datos.length;
  
  for (let i = 0; i < length - 1; i++) {
    let actual = datos[i];
    for (let j = i; j < length - 1; j++) {
      console.log(datos);
      if(actual > datos[j + 1]) {
        auxiliar = datos[j + 1];
        datos[j + 1] = actual;
        datos[j] = auxiliar;
      } else {

      }  
    }
  }
  return console.log(datos);
}

ordenamientoPorInsercion(5,2,4,1,3) 

// fs.readFile('registros_300.csv', 'utf-8',(err, data) => {
//   if(err) {
//     console.log('error: ', err);
//   } else {
//     const ordenarArrayNombres = () => {
//       let arrayNombres = data.split('\r\n');
//       ordenamientoPorInsercion(arrayNombres);
//     }
//     ordenarArrayNombres();
//   }
// })