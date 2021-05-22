/**Risk es un juego de mesa en donde las batallas se representan a través de dados. 
 * El atacante puede utilizar 3 dados y el defensor 2. Después de cada tiro se comparan los dos dados con mayor número y los segundos dos dados con mayor número. 
 * Crea un simulador de risk (que gire dados aleatoriamente) y determine los soldados que pierde cada jugador. */

const numero_random = () => Math.floor(Math.random() * (7 - 1)) + 1;

const generarNumerosRandom = (numeroDados) => {
  dados = [];
  for (let indice = 0; indice < numeroDados; indice += 1) {
    dados.push(numero_random());    
  }  
  return dados.sort().reverse();
}

const risk = () => {
  const dados = {
    atacante : generarNumerosRandom(3), 
    defensor : generarNumerosRandom(2)
  }

  const puntos = {
    atacante : 15,
    defensor : 15
  }
  let mensaje = []; 

  while (!(puntos.atacante <= 0 || puntos.defensor <= 0)) {
    console.log(` 
    Se tiran los dados:
    ${dados.atacante}
    ${dados.defensor}`);
    for (let indice = 0; indice < 2; indice += 1) {
      if(dados.atacante[indice] > dados.defensor[indice]) {
        puntos.defensor -= dados.atacante[indice] - dados.defensor[indice];
        mensaje.push(`Gana atacante ${dados.atacante[indice]} es mayor que ${dados.defensor[indice]}`);
      } else if (dados.defensor[indice] > dados.atacante[indice]) {
        puntos.atacante -= dados.defensor[indice] - dados.atacante[indice];
        mensaje.push(`Gana defensor ${dados.defensor[indice]} es mayor que ${dados.atacante[indice]}`);
      } else {
        mensaje.push('Es un empate y nadie gana');
      }
    }
    console.log(mensaje.join(' , '));
    mensaje = []
    dados.atacante = generarNumerosRandom(3);
    dados.defensor = generarNumerosRandom(3);
  }
  if(puntos.atacante <= 0) {
    console.table(puntos);
    return 'El ganador es el defensor';
  } else if(puntos.defensor <= 0){
    console.table(puntos);
    return 'El ganador es el atacante'
  }
}

console.log(risk());