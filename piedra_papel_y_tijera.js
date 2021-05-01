/**Este es un juego en el que nunca fui bueno, pero eso no significa que hacer un programa sea difícil.
 * El reto del día de hoy es escribir un programa que reciba como parámetro “piedra”, “papel”, o “tijera” y determine si ganó el jugador 1 o el jugador 2.
 * Bonus: ¿puedes hacer modificar tu programa para que el ganador sea el que gané 2 de 3 partidas?
 * Ejemplo: ppt(“piedra”, “papel”) ➞ “El ganador es el jugador 2” 
*/
let victorias_jugadorUno = 0;
let victorias_jugadorDos = 0;

const mensajeGanador = (codigoMensaje, opcion) => {
  if (codigoMensaje == 1) {
    console.log(`Gana el jugador Uno con ${opcion}`)
  } else if (codigoMensaje == 2) {
    console.log(`Gana el jugador dos con ${opcion}`);
  }  else {
    console.log(`Es empate`);
  }
}

const piedraPapelTijera = (jugadorUno, jugadorDos) => {
    if (jugadorUno == jugadorDos)  {
      mensajeGanador();
    } else if (jugadorUno == 'tijera' && jugadorDos == 'papel') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno)
    } else if (jugadorUno == 'papel' && jugadorDos == 'piedra') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno)
    } else if (jugadorUno == 'piedra' && jugadorDos == 'tijera') {
        victorias_jugadorUno += 1;
        mensajeGanador(1, jugadorUno);
    } else {
        victorias_jugadorDos += 1;
        mensajeGanador(2, jugadorDos);
    }
  
  if (victorias_jugadorUno == 2) {
    return console.log(`Ganador es jugador uno con ${victorias_jugadorUno} victorias`);
  } else if (victorias_jugadorDos == 2) {
    return console.log(`Ganador es jugador dos con ${victorias_jugadorDos} victorias`);
  }
}

piedraPapelTijera('tijera','papel');
piedraPapelTijera('papel','tijera');
piedraPapelTijera('piedra','tijera');

/** Solucion
 * Gana el jugador Uno con tijera
 * Gana el jugador dos con tijera
 * Gana el jugador Uno con piedra
 * Ganador es jugador uno con 2 victoria 
 */