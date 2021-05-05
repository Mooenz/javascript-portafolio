/**Un ejercicio que siempre resulta útil para aplicar aleatoriedad es la generación de contraseñas. 
 * Básicamente debes crear un string de caracteres al azar tomando en cuenta las siguientes condiciones que el usuario debe poder elegir:
 * Longitud de la contraseña. */

const minuscula = 'abcdefghijklmnñopqrstuwxyz';
const mayuscula = 'ABCDEFGHIJKLMNÑOPQRSTUWXYZ';
const numeros = '1234567890';
const simbolos = ',.;:+-*/¿?¡!#$%&';

const randonNumber = (lengthString) => Math.floor(Math.random(1)*lengthString);

const callMinusculaString = () => minuscula.charAt(randonNumber(minuscula.length))
const callMayusculaString = () => mayuscula.charAt(randonNumber(mayuscula.length))
const callNumerosString = () => numeros.charAt(randonNumber(numeros.length))
const callSimbolostring = () => simbolos.charAt(randonNumber(simbolos.length))

const passworld = (numero_caracteres_contraseña) => {
    let concatenarContraseña = [];
    if (numero_caracteres_contraseña >= 8) {
        for (let I = 0; I < numero_caracteres_contraseña; I += 1 ) {
            switch (randonNumber(4)) {
                case 0: concatenarContraseña.push(callMinusculaString());
                break;
                case 1: concatenarContraseña.push(callMayusculaString());
                break;
                case 2: concatenarContraseña.push(callNumerosString());
                break;
                case 3: concatenarContraseña.push(callSimbolostring());
                break;
                default: concatenarContraseña.push(' Nada ');
            }      
        }
    } else {
			return console.log('La longitud de contraseña es demaciada corta');
		}
    return console.log(concatenarContraseña.join(''));   
}

passworld(1);
passworld(10);
passworld(8);

/** Solucion
 * es impredecible 
 */