/**Te diste cuenta de que muchas veces hacemos cálculos que son con más de dos valores,
 *quiero que crees el algoritmo para programar una calculadora a la que le puedas agregar tantos números como tú requieras, deberá servir para adiciones y multiplicaciones */

const sumar = (adicion) => adicion.reduce((indice, numero) => indice + numero);
const restar = (sustracion) => sustracion.reduce((indice, numero) => indice - numero);
const multiplica = (producto) => producto.reduce((indice, numero) => indice * numero);
const divide = (divicion) => divicion.reduce((indice, numero) => indice + numero);



const calculadoraV2 = () => {
  let arrNumeros = [];
  let resultado = 0;
  let opcion = prompt('1. Para sumar, 2. para restar 3. para multiplicar y 4. para dividir');

  do {
    arrNumeros.push(parseInt(prompt('Ingrese nuevo numero:')));
  } while (prompt('Temerminaste, responde si o no') == 'no');

  switch (opcion) {
    case '1':
      resultado = sumar(arrNumeros);
      console.log(resultado);      
      break;
    case '2':      
      resultado = restar(arrNumeros);
      console.log(resultado); 
      break;      
    case '3':
      resultado = multiplica(arrNumeros);
      console.log(resultado); ;
      break; 
    case '4':
      resultado = divide(arrNumeros);
      console.log(resultado); 
      break;    
    default: 'Esa operacion no es valida'
      break;
  }
}

calculadoraV2();

/**Solucion
 * 
 */