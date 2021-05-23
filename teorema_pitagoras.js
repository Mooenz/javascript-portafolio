/** El Teorema de Pitagoras nos puede ayudar a encontrar la distancia entre dos puntos en un plano. Crea una calculadora que determine la distancia dado dos puntos.
 * Por ejemplo,
 * 
 * Punto A = (3, 4)
 * Punto B = (5, 7)
 * Distancia = 3.605551 
 * */

function distanciaEntreDosPuntos({ x1, x2,  y1,  y2}) {  
  const formulaDistancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2), 2).toFixed(6);
  return `La distancia entre el punto A (${x1}, ${y1}) y el punto B (${x2}, ${y2}) es ${formulaDistancia}`;
}

const ejemploUno = {
  x1: 3,
  x2: 5,
  y1: 4,
  y2: 7
}


console.log(distanciaEntreDosPuntos(ejemploUno));
console.log(distanciaEntreDosPuntos({x1: 15, x2: 30,  y1: 27,  y2: 54}));

/** Solucion
 * La distancia entre el punto A (3, 4) y el punto B (5, 7) es 3.605551
 * La distancia entre el punto A (15, 27) y el punto B (30, 54) es 30.886890
 */