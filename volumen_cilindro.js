/**Un cilindro es un cuerpo geométrico que requiere de varias fórmulas, 
 * aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal. */

const pi = 3.141592;

const calcularVolumenCilindro = (altura, radio) => {
  const radio_al_cuadrado = radio*radio;
  const volumen = Math.floor(pi*radio_al_cuadrado*altura);
  return console.log(`El volumen del cilindro es ${volumen} m3`);
}

calcularVolumenCilindro(10,5);

/**Solucion
 *El volumen del cilindro es 785 m3
 */