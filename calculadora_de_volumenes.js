/**Un cilindro es un cuerpo geométrico que requiere de varias fórmulas,
 *aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal. */

const enviarMensaje = (objeto, volumen) => console.log(`El volumen del ${objeto} es ${volumen} m3`);


const volumenes = (objetoGeometrico, altura, radio) => {
  const pi = 3.141592;
  const radio_al_cuadrado = radio*radio;
  const radio_al_cubo = radio*radio*radio;
  let volumen = 0;

  switch (objetoGeometrico) {
    case 'cilindro':
      volumen = Math.floor(pi*radio_al_cuadrado*altura);
      enviarMensaje(objetoGeometrico, volumen);
      break;
    case 'cubo':
      volumen = Math.floor(altura*altura*altura);
      enviarMensaje(objetoGeometrico, volumen);
      break;
    case 'esfera':
      volumen = Math.floor((4/3)*pi*radio_al_cubo);
      enviarMensaje(objetoGeometrico, volumen);
      break;  
    default: 'Puedes elejir entre cilindro, cubo, esfera';
      break;
  }
  return
}

volumenes('cilindro', 10, 5);
volumenes('cubo', 10);
volumenes('esfera', 0, 8);

/**Solucion
 * El volumen del cilindro es 785 m3
 * El volumen del cubo es 1000 m3
 * El volumen del esfera es 2144 m3
 */