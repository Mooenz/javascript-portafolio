/** Crea un programa que tome un número, un operador, y otro número y realice el cálculo correcto.
 * Ejemplo: 
 * calculadora(2, “+”, 2) -> 4
 * calculadora(4, “/”, 2) -> 2 
 */

 const calculadora = (numeroUno, signo, numeroDos) => {
  switch (signo) {
    case '+': console.log(numeroUno + numeroDos);      
      break;
    case '-': console.log(numeroUno - numeroDos);      
      break;
    case '*': console.log(numeroUno * numeroDos);      
      break;
    case '/': console.log(numeroUno / numeroDos);      
      break;
    default: console.log('Debes colocar los datos');
      break;
  }
 }
 calculadora();
 calculadora(10, '+', 5);
 calculadora(10, '-', 5);
 calculadora(10, '*', 5);
 calculadora(10, '/', 5);

 /** Solucion
  * Debes colocar los datos
  * 15
  * 5
  * 50
  * 2
  */