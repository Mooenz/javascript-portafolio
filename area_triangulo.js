/** El área de un triángulo se describe de la siguiente manera: A = (b * h) / 2.
 * El reto del día de hoy es escribir un programa que tome la base y la altura como parámetros y calcule el área del triángulo.
 * 
 * Bonus: El programa debe determinar si el triángulo es isósceles, equilátero o escaleno. 
 */

/** PENDIENTE RETO 2 */
const areaTriguangulo = (base = 8, altura = 4) => {
  let area = base*altura/2;
  return console.log(`El area del triangulo es: ${area} m2`);
}
areaTriguangulo();
areaTriguangulo(5, 4);
/** Solucion
 *El area del triangulo es: 16
 *El area del triangulo es: 10
 */