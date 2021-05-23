/**#Los números de Fibonacci nos ayudan a modelar crecimiento. La definición de Fibonacci es F(n) = F(n - 1) + F(n - 2). 
 * El reto del día de hoy es crear un programa que pueda calcular los número de Fibonacci y que nos digas cuál es el resultado de Fibonacci de 9567. 
 * */

let cache = {
  1:1,
  2:1
}

const fibonacci = (numerofibonaci) => {
  if (!cache[numerofibonaci]) {
    cache[numerofibonaci] = fibonacci(numerofibonaci - 1) + fibonacci(numerofibonaci - 2);
  }
  return cache[numerofibonaci];
}

console.log(fibonacci(1476));
console.log(fibonacci(9567));

/** Solucion
 * 1.3069892237633987e+308
 * Infinity
 * 
 * Toca integrar una libreria de js para el punto flotante.
 */