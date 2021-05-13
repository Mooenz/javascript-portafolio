/**Escribe un programa al que le indiques un número cómo límite y determinará todos los números primos desde el 1 hasta el número límite ingresado.
 * Recuerda que los números primos tienen las siguientes características:
 * 
 * Es un número natural entero mayor a 1.
 * Tiene únicamente 2 divisores: el mismo número y el 1. */

let numeros_primos = [];

const primo = (numero) => {
  for (let indice = 2; indice < numero; indice++) {
   if (numero % indice == 0) {
    return false;
   }    
  }
  return numero !==1;
}

const buscarNumeroPrimos = (limite) => {
  for (let i = 2; i < limite; i += 1) {
    if(primo(i)) {
      numeros_primos.push(i);
    }
  }
  console.log(`Los numeros primos son: ${numeros_primos}.`);
}

buscarNumeroPrimos(10);
buscarNumeroPrimos(50);

/**Solucion
 *Los numeros primos son: 2,3,5,7.
 *Los numeros primos son: 2,3,5,7,2,3,5,7,11,13,17,19,23,29,31,37,41,43,47.
 */