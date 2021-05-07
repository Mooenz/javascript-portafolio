/**El próximo reto será que ordenes una lista de 10 números aleatorios de mayor a menor y viceversa. */

let numerosOrdenar = [];

const genera10NumerosAleatorios = () => {
  for (let indice = 0; indice < 10; indice += 1) {
    numerosOrdenar.push(Math.floor(Math.random() * (20 - 1)) + 1);  
  }
}

const ordenarNumeros = (arrNumeros) => {
  console.log(`Numeros a ordenar ${arrNumeros}`); 

  let numerosMenorMayor = arrNumeros;
  let numerosMayorMenor = arrNumeros;
  const length = arrNumeros.length;
  let temporal = 0;
  let movimientos = 0;

  do {
    movimientos = 0;
    for (let indice = 0; indice < length - 1; indice += 1) {
      if (numerosMenorMayor[indice] > numerosMenorMayor[indice + 1]) { 
        temporal = numerosMenorMayor[indice];
        numerosMenorMayor[indice] = numerosMenorMayor[indice + 1];
        numerosMenorMayor[indice + 1] = temporal;
        movimientos += 1;
      }    
    }    
  } while (!(movimientos == 0));
  console.log(`Numeros ordenado de menor a mayor ${numerosMenorMayor}`);

  do {
    movimientos = 0;
    for (let indice = 0; indice < length - 1; indice += 1) {
      if (numerosMayorMenor[indice + 1] > numerosMayorMenor[indice]) { 
        temporal = numerosMayorMenor[indice];
        numerosMayorMenor[indice] = numerosMayorMenor[indice + 1];
        numerosMayorMenor[indice + 1] = temporal;
        movimientos += 1;
      }    
    }    
  } while (!(movimientos == 0));

  console.log(`Numeros ordenado de mayor a menor ${numerosMayorMenor}`);
}

genera10NumerosAleatorios();
ordenarNumeros(numerosOrdenar);