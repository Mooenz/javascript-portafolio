/**FizzBuzz es un popular prueba para desarrolladores que consisten en lo siguientes parametros:
 * Si el numero es multiplo de 3, debe mostrar un mensaje que diga fizz.
 * Si el numero es multiplo de 5, debe mostrar un mensaje que difa buzz.
 * Si el numero es multipli de ambos, debe mostrar un mensaje que diga fizzbuzz.
*/
const cantidadNumeros = (cantidad_numeros) => {
	for (let i = 1; i <= cantidad_numeros; i++) {		
		fizzBuzz(i)
	}
}

const generarModulo = (numero, modulo) => numero % modulo;

const enviarMensaje = (numero, mensaje) => console.log(`${numero} es ${mensaje}`);

const fizzBuzz = (numero) => {
	if (generarModulo(numero, 3) === 0 && generarModulo(numero, 5) === 0) {
		enviarMensaje(numero, 'FizzBuzz')
	} else if (generarModulo(numero, 3) === 0) {
			enviarMensaje(numero, 'Fizz')
	}	else if (generarModulo(numero, 5) === 0) {
			enviarMensaje(numero, 'Buzz')
	}
}

cantidadNumeros(10);

/**Solucion
 * 3 es Fizz
 *5 es Buzz
 *6 es Fizz
 *9 es Fizz
 *10 es Buzz
 */
