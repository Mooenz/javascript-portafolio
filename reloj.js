/** El reto del día de hoy es escribir un programa que tome como parámetros las horas y los minutos y que nos calcule los segundos. */

const HORA_EN_SEGUNDOS = 3600;
const MINUTO_EN_SEGUNDOS = 60;


const comvertirASegundos = (horas=10, minutos=50) => { 
  const SEGUNDOS = HORA_EN_SEGUNDOS * horas + MINUTO_EN_SEGUNDOS * minutos;
  return console.log(`${horas} horas y ${minutos} min equivalen a ${SEGUNDOS} segundos`);
}

comvertirASegundos(); 
comvertirASegundos(3,59); 

/** Solucion
 * 10 horas y 50 min equivalen a 39000 segundos
 * 3 horas y 59 min equivalen a 14340 segundos */