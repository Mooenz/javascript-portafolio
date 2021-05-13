/**Este es un juego en el que nunca fui bueno, pero eso no significa que hacer un programa sea difícil.
 * El reto del día de hoy es escribir un programa que reciba como parámetro “piedra”, “papel”, o “tijera” y determine si ganó el jugador 1 o el jugador 2.
 * Bonus: ¿puedes hacer modificar tu programa para que el ganador sea el que gané 2 de 3 partidas?
 * Ejemplo: ppt(“piedra”, “papel”) ➞ “El ganador es el jugador 2” 
*/
let victorias_jugadorUno = 0;
let victorias_jugadorDos = 0;

const mensajeGanador = (codigoMensaje, opcion) => {
  if (codigoMensaje == 1) {
    console.log(`Gana el jugador 1 con ${opcion}`);
  } else if (codigoMensaje == 2) {
    console.log(`Gana el jugador 2 con ${opcion}`);
  }  else {
    console.log(`Es empate, nadie recibe punto`);
  }
}

const piedraPapelTijera = (jugadorUno, jugadorDos) => {
    if (jugadorUno == jugadorDos)  {
      mensajeGanador();
    } else if (jugadorUno == 'tijera' && jugadorDos == 'papel') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno);
    } else if (jugadorUno == 'papel' && jugadorDos == 'piedra') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno);
    } else if (jugadorUno == 'piedra' && jugadorDos == 'tijera') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno);
    } else {
        victorias_jugadorDos += 1;
        mensajeGanador(2, jugadorDos);
    }
  
  if (victorias_jugadorUno == 2) {
    console.log(`Ganador es jugador 1 con ${victorias_jugadorUno} victorias`);
    victorias_jugadorUno = 0;
    victorias_jugadorDos = 0; 
  } else if (victorias_jugadorDos == 2) {
    console.log(`Ganador es jugador 2 con ${victorias_jugadorDos} victorias`);
    victorias_jugadorUno = 0;
    victorias_jugadorDos = 0;     
  }
}

piedraPapelTijera('tijera','papel');
piedraPapelTijera('papel','papel');
piedraPapelTijera('papel','tijera');
piedraPapelTijera('piedra','piedra');
piedraPapelTijera('piedra','tijera');
piedraPapelTijera('tijera','tijera');
piedraPapelTijera('piedra','tijera');
piedraPapelTijera('papel','tijera');
piedraPapelTijera('piedra','papel');

/** Solucion
 *Gana el jugador 1 con tijera
 piedra_papel_y_tijera.js:11
 Es empate, nadie recibe punto
 piedra_papel_y_tijera.js:15
 Gana el jugador 2 con tijera
 piedra_papel_y_tijera.js:13
 Es empate, nadie recibe punto
 piedra_papel_y_tijera.js:15
 Gana el jugador 1 con piedra
 piedra_papel_y_tijera.js:11
 Ganador es jugador 1 con 2 victorias
 piedra_papel_y_tijera.js:37
 Es empate, nadie recibe punto
 piedra_papel_y_tijera.js:15
 Gana el jugador 1 con piedra
 piedra_papel_y_tijera.js:11
 Gana el jugador 2 con tijera
 piedra_papel_y_tijera.js:13
 Gana el jugador 2 con papel
 piedra_papel_y_tijera.js:13
 Ganador es jugador 2 con 2 victorias
 piedra_papel_y_tijera.js:41
 */