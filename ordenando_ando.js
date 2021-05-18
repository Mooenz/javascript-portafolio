/** Ordenando ando 1:  Genera un set de 300 nombres en la siguiente página de internet http://www.generatedata.com/?lang=es y descárgalo como CSV
 *  Ordenando ando 2: Ordena tu set de nombres con cualquier algoritmo de ordenamiento que quieras, asegúrate de imprimir cuánto tiempo se demoró tu equipo en ordenar.
 *  Ordenando ando 3: Prueba otro algoritmo de ordenamiento con el mismo data set y compara el tiempo, comparte en el foro cuál fue tu algoritmo con mejor rendimiento y por qué
 */
const fs = require('fs');
let ordenamientoRapidoMovimientos = 0;

const mensaje = (movimientos, metodo) => `En ${movimientos} movimientos realizo el metodo ${metodo}.`;

const ordenamientoPorInsercion = (datos) => {
  console.time();
  let i, j;
  let auxiliar, actual, movimientos = 0;
  const length = datos.length;

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
  return console.log(mensaje(movimientos, 'ordenamiento por insercion'));
}

const ordenamientoDeBurbuja = (datos) => {
  console.time();
  let i;
  let auxiliar, intercambio = 0,  movimientos = 0;
  const length = datos.length;

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
  return console.log(mensaje(movimientos, 'ordenamiento de burbuja'));
}

const ordenamientoRapido = (datos) => {
  const length = datos.length;
  if (length <= 1) {
    return datos;
  }

  let pivote = datos[0], izquierda = [], derecha = [];   

  for (let i = 1; i < length; i++) {
    ordenamientoRapidoMovimientos += 1; 
    datos[i] < pivote ? izquierda.push(datos[i]) : derecha.push(datos[i]);
  }
  return ordenamientoRapido(izquierda).concat(pivote, ordenamientoRapido(derecha));
}

const tiempoTomaOrdenamientoRapido = (datos) => {
  console.time();
  ordenamientoRapido(datos);
  console.timeEnd();
  return console.log(mensaje(ordenamientoRapidoMovimientos,'ordenamiento rapido'));
}

const control = (datos) => {
  ordenamientoPorInsercion(datos.split('\r\n'));
  ordenamientoDeBurbuja(datos.split('\r\n'));
  tiempoTomaOrdenamientoRapido(datos.split('\r\n'));
}

fs.readFile('registros_300.csv', 'utf-8', (err, info) => err ? console.log('error: ', err) : control(info));

/**Solucion
 * El mejor metodo es ordenamiento rapido (Quicksort), lo que basicamente hace es dividir el array en 2 dependiendo si es menor o mayor que 'pivote'.
 * EL metodo de insercion y burbuja (insertion sort and bubble sort) son iguales en el numero de movimientos pero difieren en tiempo de ejecucion,
 * aunque segun wikipedia esto sea al contrario.
 * 
 * 'El ordenamiento de burbuja es asintóticamente equivalente en tiempos de ejecución con el ordenamiento por inserción en el peor de los casos, 
 * pero ambos algoritmos difieren principalmente en la cantidad de intercambios que son necesarios. Resultados experimentales como los descubiertos 
 * por Astrachan han demostrado que el ordenamiento por inserción funciona considerablemente mejor incluso con listas aleatorias. Por esta razón, 
 * muchos libros de algoritmos modernos evitan usar el ordenamiento de burbuja, reemplazándolo por el ordenamiento por inserción'.
 * 
 * 
 * En 21673 movimientos realizo el metodo ordenamiento por insercion.
 * En 21673 movimientos realizo el metodo ordenamiento de burbuja.
 * En 2786 movimientos realizo el metodo ordenamiento rapido.
 */