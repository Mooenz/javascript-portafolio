/** El reto del día de hoy es crear un programa que recibe como parámetro un string y la cantidad de veces que queremos repetir ese string y devuelve una cadena con las repeteciones. 
 * ¿El twist? Sólo puedes usar una función recursiva (pro tip: no olvides tu caso base). */

const repiteLaPalabra = (palabra, cantidadRepeticiones) => {
  console.log(`${palabra}`);
  if (cantidadRepeticiones > 0) {    
    cantidadRepeticiones -= 1;
    repiteLaPalabra(palabra,cantidadRepeticiones);
  } else {
    return
  }
}

repiteLaPalabra('Mooenz', 5);

/** Solucion 
 * Mooenz 
 * Mooenz
 * Mooenz
 * Mooenz
 * Mooenz
 */