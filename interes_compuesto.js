/** Interes Compuesto: El interés compuesto te sirve para generar más dinero gracias a los intereses que generas, es decir, hace que el valor que se paga por intereses se vaya aumentando mes a mes, 
 * por que el dinero sobre el cuál se hace el cálculo del interés se incrementa cada vez que se liquidan los respectivos intereses que ganaste el mes previo.
 * Crea una calculadora que te diga cuánto vas a tener en 6 meses, 1 año y 2 años al ahorrar 100 dólares con una tasa de interés a tu favor del 4%.
 * 
 * ¿Qué pasaría sí?: Siguiendo con el reto anterior de ¿Cuanto vas a ahorrar?:
 * Ahora quiero que le agregues a tu programa de interés compuesto la capacidad de variar el valor inicial de tu ahorro. 
 * 
 * ¿Puedo ahorrar otros periodos de tiempo?: Tu banco quiere permitirte ahorrar en nuevos intérvalos de tiempo que tú eleijas, 
 * agrega la funcionalidad a tu calculadora de interés compuesto de poner una cantidad de meses de ahorro variable.
 * 
 * ¿Puedo ahorrar en otros bancos?:Te llegó un correo de un banco rival diciéndote que ellos te ofrecen un 3% de interés plus un 7% extra año con año
 * ¿Cuál de los dos bancos te conviene más para un año de ahorro?¿Cuál para 2?¿Cuál para 3?
 */

const taza_interes_banpolombia = 4 / 100;
const taza_interes_banco_oriente = 3 / 100;
const taza_interes_plus = 7 / 100;


const interesCompuestoBancoOriente = (capital_compuesto, tiempo) => {
  let contador = tiempo;
  let ahorro_banco_oriente;

  if (contador > 0) {
    ahorro_banco_oriente = capital_compuesto * Math.pow(1 +  taza_interes_banco_oriente/1, tiempo);
    capital_compuesto = ahorro_banco_oriente;
    contador = contador - 1;
    interesCompuestoBancoOriente(capital_compuesto, contador);
  }

  if (tiempo >= 1) {
    ahorro_banco_oriente = ahorro_banco_oriente * Math.pow(1 +  taza_interes_plus, tiempo);
  } 
  return ahorro_banco_oriente
}

const interesCompuestoBanpolombia = (capital_compuesto, tiempo) => {
  let contador = tiempo;
  let ahorro_banpolombia;

  if (contador > 0) {
    ahorro_banpolombia = capital_compuesto * Math.pow(1 +  taza_interes_banpolombia/1, tiempo);
    capital_compuesto = ahorro_banpolombia;
    contador = contador - 1;
    interesCompuestoBanpolombia(capital_compuesto, contador);
  }
  return ahorro_banpolombia;
}

const mensaje = (ahorro, banco, tiempo) => `El total ahorrado en ${banco} fue de $${ahorro.toFixed(2)} en ${tiempo} años`;

const interesCompuesto = (capital_compuesto, tiempo) => {
  const banco_oriente = interesCompuestoBancoOriente(capital_compuesto, tiempo), banpolombia =  interesCompuestoBanpolombia(capital_compuesto, tiempo);
  let mejor_banco;

  if (banpolombia > banco_oriente) {
    mejor_banco = 'Banpolombia';
  } else {
      mejor_banco = 'Banco Oriente';
  }
  return `${mensaje(banpolombia, 'Banpolombia', tiempo)} y ${mensaje(banco_oriente, 'Banco oriente', tiempo)} y la mejor opcion es ${mejor_banco}.`
}

console.log(interesCompuesto(100, 0.6));
console.log(interesCompuesto(100, 1));
console.log(interesCompuesto(100, 2));
console.log(interesCompuesto(100, 3));
/*console.log(interesCompuesto(100, 36));*/


/** Solucion
 * El total ahorrado en Banpolombia fue de $102.38 en 0.6 años y El total ahorrado en Banco oriente fue de $101.79 en 0.6 años y la mejor opcion es Banpolombia.
 * El total ahorrado en Banpolombia fue de $104.00 en 1 años y El total ahorrado en Banco oriente fue de $110.21 en 1 años y la mejor opcion es Banco Oriente.
 * El total ahorrado en Banpolombia fue de $108.16 en 2 años y El total ahorrado en Banco oriente fue de $121.46 en 2 años y la mejor opcion es Banco Oriente.
 * El total ahorrado en Banpolombia fue de $112.49 en 3 años y El total ahorrado en Banco oriente fue de $133.86 en 3 años y la mejor opcion es Banco Orientes.
 */