/**Este es un juego sencillo que trata de adivinar un número aleatorio, el truco está en que no sabes cuál es ese número pero en cada ingresarás un número y sabrás si este es mayor o menor al número secreto. 
 * Así que toma en cuenta estas restricciones para intentar adivinar el número y no olvides contar el número de intentos para mostrarlo una vez aciertes.*/

const NUMERO_A_ENCONTRAR = Math.floor(Math.random() * (20 - 1)) + 1;
let respuesta = prompt('Adivina que numero es');
let  estadoRespuesta = true;


do {
  if(respuesta == NUMERO_A_ENCONTRAR) {
    console.log(`Feliciades, el numero corresto es: ${NUMERO_A_ENCONTRAR}`);
    estadoRespuesta = false;
  } else if (NUMERO_A_ENCONTRAR > respuesta) {
    respuesta = prompt('El numero es mayor');
  } else {
      respuesta = prompt('El numero es menor');   
  }
} while (estadoRespuesta);