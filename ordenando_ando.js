        const fs = require('fs');

        const mensaje = (msj, metodo) => `En ${msj} movimientos realizo el metodo ${metodo}`

        const ordenamientoPorInsercion = (datos) => {
          console.time();
          let i, j;
          let auxiliar, actual, movimientos = 0;
          let length = datos.length;

          for (i = 1; i < length; i += 1) {
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
          return mensaje(movimientos, 'ordenamiento por insercion');
        }

        const ordenamientoDeBurbuja = (datos) => {
          console.time();
          let i;
          let auxiliar, intercambio = 0,  movimientos = 0;
          let length = datos.length;

          do {
            intercambio = 0;
            for (i = 0; i < length; i += 1) {
              if (datos[i] > datos[i + 1]) {
                auxiliar = datos[i];
                datos[i] = datos[i + 1];
                datos[i + 1] = auxiliar;
                intercambio+=1;
                movimientos+=1;
              }

            }    
          } while (!intercambio == 0);

          console.timeEnd();
          return mensaje(movimientos, 'ordenamiento de burbuja');
        }

        fs.readFile('registros_300.csv', 'utf-8',(err, data) => {
          if(err) {
            console.log('error: ', err);
          } else {
            const ordenarArrayNombres = () => {
              const arrayNombres = data.split('\r\n');
              
              console.log(ordenamientoPorInsercion(arrayNombres));
              console.log(ordenamientoDeBurbuja(arrayNombres));
            }
            ordenarArrayNombres();
          }
        })