/**El interés compuesto te sirve para generar más dinero gracias a los intereses que generas, es decir, hace que el valor que se paga por intereses se vaya aumentando mes a mes, 
*por que el dinero sobre el cuál se hace el cálculo del interés se incrementa cada vez que se liquidan los respectivos intereses que ganaste el mes previo.
*Crea una calculadora que te diga cuánto vas a tener en 6 meses, 1 año y 2 años al ahorrar 100 dólares con una tasa de interés a tu favor del 4%*/


const taza_interes = 4;
let ahorro;

const interesCompuesto = (capital_compuesto, tiempo) => {
  let contador = 0
  if (tiempo > 0) {
    ahorro = capital_compuesto =+ capital_compuesto + (capital_compuesto * ( taza_interes / 100));
    capital_compuesto = ahorro;
    contador = tiempo - 1;
    interesCompuesto(capital_compuesto, contador);
  }
  return `El total ahorrado fue de $${ahorro.toFixed(2)} en ${tiempo} meses`;
}

console.log(interesCompuesto(100, 6));
console.log(interesCompuesto(100, 12));
console.log(interesCompuesto(100, 24));

/** Solucion
 * El total ahorrado fue de $126.53 en 6 meses
 * El total ahorrado fue de $160.10 en 12 meses
 * El total ahorrado fue de $256.33 en 24 meses
 */