/**Un cilindro es un cuerpo geométrico que requiere de varias fórmulas,
 *aplícalas en un programa que reciba datos como su altura y radio de las bases para mostrar el resultado acotado a un decimal. */
const pi = 3.141592;
let volumen = 0;

const enviarMensaje = (objeto, volumen) => console.log(`El volumen del ${objeto} es ${volumen} m3`);

const volumenes = (objetoGeometrico, altura, radio) => {
  const radio_al_cuadrado = Math.pow(radio,2);
  const radio_al_cubo = Math.pow(radio,3);

  const objetos = {
    cilindro : volumen = Math.floor(pi*radio_al_cuadrado*altura),
    cubo : volumen = Math.floor(Math.pow(altura,3)),
    esfera : volumen = Math.floor((4/3)*pi*radio_al_cubo)
  }

  if(objetos[objetoGeometrico]) {
    return enviarMensaje(objetoGeometrico, objetos[objetoGeometrico]);
  } else {
    return console.log(`Este objeto: ${objetoGeometrico}, no existe`);
  }
}

volumenes('cilindro', 10, 5);
volumenes('cubo', 10, 0);
volumenes('esfera', 0, 8);
volumenes('casa', 0, 8);

/**Solucion
 * El volumen del cilindro es 785 m3
 * El volumen del cubo es 1000 m3
 * El volumen del esfera es 2144 m3
 */