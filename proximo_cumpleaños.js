/**Muchos lenguajes de programación cuentan con un módulo para manejar tiempo y fechas. 
 * Haz uso de este módulo para crear un programa al que le ingreses tu fecha de nacimiento y te diga cuantos días faltan para tu próximo cumpleaños. */

const hoy = new Date();
const un_dia_milisegundos = 1000*60*60*24;


const siguienteCumpleaño = (año,dia, mes) => {
  const fecha_cumpleaños = new Date(año, mes-1, dia);
  const dias_faltantes = Math.floor(Math.abs(fecha_cumpleaños - hoy)/ un_dia_milisegundos);
  if (dias_faltantes == 0) {
    return console.log('Tu cumpleaños es hoy, FELICIDADES');
  } else {
    return console.log(`Faltan ${dias_faltantes} dias para tu cumpleaños`);
  }
}

siguienteCumpleaño(2021, 21, 8);
siguienteCumpleaño(2022, 2, 5);

/**Solucion
 * Faltan 107 dias para tu cumpleaños
 * Faltan 361 dias para tu cumpleaños
 */