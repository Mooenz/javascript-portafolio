/**El código morse te permite mandar señales mediante cualquier medio que pueda ser intermitente. 
 * Esto significa que puedes mandar señales a través de pulsos eléctricos (como en el telégrafo), audio, luz, etc.
 * El reto del día de hoy es crear un decodificador de código morse. Por ejemplo: hola mundo -> .... --- .-.. .- -- ..- -. -.. --- */

const codigoMorse = {
  'a': '.-', 
  'b': '-...', 
  'c': '-.-.', 
  'd': '-..', 
  'e': '.', 
  'f': '..-.', 
  'g': '--.', 
  'h': '....', 
  'i': '..', 
  'j': '·---', 
  'k': '-.-', 
  'l': '.-..', 
  'm': '--', 
  'n': '-.', 
  'ñ': '--.--', 
  'o': '---', 
  'p': '.--.', 
  'q': '--.-',
  'r': '.-.', 
  's': '...', 
  't': '-', 
  'u': '..-', 
  'v': '...-', 
  'w': '.--',
  'x': '-..-', 
  'y': '-.--', 
  'z': '--..',
  '0': '-----', 
  '1': '.----', 
  '2': '..---',
  '3': '...--', 
  '4': '....-', 
  '5': '.....', 
  '6': '-....', 
  '7': '--...', 
  '8': '---..', 
  '9': '----.',  
  '.': '.-.-.-', 
  ',': '-.-.--', 
  '?': '..--..', 
  '!': '-.-.--', 
  '´': '.----.', 
  '\'': '.-..-.', 
  '(': '-.--.', 
  ')': '-.--.-', 
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.', 
  '/': '-..-.', 
  '_': '..--.-', 
  '=': '-...-', 
  '+': '.-.-.',
  '-': '-....-', 
  '$': '...-..-', 
  '@': '.--.-.'
};

const traductorCodigoMorse = (frase) => {
  let fraseTraducida = [];
  
  fraseString = frase.toString();
  fraseMinuscula = fraseString.toLowerCase().split('');
  fraseMinuscula.forEach(indice =>{
    if(!codigoMorse[indice] == ' ') {
      fraseTraducida.push(codigoMorse[indice])      
    }
  });

  return `${frase} se traduce a: ${fraseTraducida.join(' ')}`;
}

console.log(traductorCodigoMorse('hola mundo'));
console.log(traductorCodigoMorse('HOLA MUNDO'));
console.log(traductorCodigoMorse(21));

/**Solucion
 * Hola mundo se traduce a: .... --- .-.. .- -- ..- -. -.. ---
 * HOLA MUNDO se traduce a: .... --- .-.. .- -- ..- -. -.. ---
 * 21 se traduce a: ..--- .----
 */