/**Imagina que pediste comida a domicilio (porque debemos quedarnos en casa), así que crearás un programa al cual ingresarás el valor de los platillos ordenados,
 *obtendrás la suma total de la comida y calcularás un porcentaje de propina.
 *Recuerda que puedes ingresar una cantidad indeterminada de platillos, indica a tu programa cuando calcular el resultado final.*/

  const valor_platillo = 15000;

  const calculaPropina = (cantidad_platillos) => {
    const total = valor_platillo * cantidad_platillos;
    const valor_propina = total * 15 / 100;
    return console.log(`Total a pagar es de $${total} y la propina es de $${valor_propina}`);
  }

  calculaPropina(5);
  calculaPropina(15);

 /**Solucion
  *Total a pagar es de $75000 y la propina es de $11250
  *Total a pagar es de $225000 y la propina es de $33750
  */