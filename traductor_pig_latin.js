/**El Pig Latin es una lengua lúdica que consiste en modificar las palabras con base en las siguientes condiciones:
 * 1. Si una palabra comienza con sonido de consonante, se pasan todas las consonantes antes de la primer vocal y se agrega la sílaba “ay” al final (comida = omidacay).
 * 2. Si la palabra inicia con vocal, entonces agrega la sílaba “way” al final (onomatopeya = onomatopeyaway).
 * Tu objetivo es crear un programa que reciba un texto y lo traduzca a esta lengua ¿qué resultados obtuviste? */

const vocales = ['a', 'e', 'i', 'o', 'u'];

const traducir = (palabra_a_traducir) => {
  palabra_a_traducir = palabra_a_traducir.toLowerCase();
  const array_palabra_a_traducir = palabra_a_traducir.split('');
  const primera_letra_palabra_a_traducir = array_palabra_a_traducir[0];
  for (let indice = 0; indice < vocales.length; indice += 1) {
    if(primera_letra_palabra_a_traducir == vocales[indice]) {
      return console.log(palabra_a_traducir+'way');      
    }
  }
  return console.log(array_palabra_a_traducir.slice(1).join('')+primera_letra_palabra_a_traducir+'ay');
}

traducir('hola');
traducir('indio');
traducir('Manuel');
traducir('Andres');

/**Solucion
 * olahay
 * indioway
 * anuelmay
 * andresway
 */