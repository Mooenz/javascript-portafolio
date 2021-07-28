**++Variables y operaciones++**

**_Parte 1_**

- **¿Qué es una variable y para qué sirve?**
Es un espacio en memoria que se usa en nuestro programa y su valor puede ser un numero, un string, un boleano, null o undefined.


- **¿Cuál es la diferencia entre declarar e inicializar una variable?**
declarar es cuando indico cual es el nombre de mi variable, y inicializar es cuando le doy un valor inicial.


- **¿Cuál es la diferencia entre sumar números y concatenar strings?**
Sumar numeros da como resultado un nuevo valor para variables de tipo numérico, concatenar es juntar strings en un nuevo string.


- **¿Cuál operador me permite sumar o concatenar?**
El signo '+'.

**_Parte 2_**

- **Determina el nombre y tipo de dato para almacenar en variables la siguiente información:**

```
Nombre = nombreUsuario, String.
Apellido = apellidoUsuario, String.
Nombre de usuario en Platzi = apodoUsuario, String.
Edad = edadUsuario, Number.
Correo electrónico = correoUsuario, String.
Mayor de edad = esMayorDeEdad, Boolean.
Dinero ahorrado = dineroAhorradoUsuario, Number.
Deudas = deudasUsuario, Number.
```

**_Parte 3_**

- **Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.**

```
let nombreUsuario = 'Einstein';
let apellidoUsuario = 'Musk'
let apodoUsuario = 'Toro99'
let edadUsuario = 99;
let electrónico = 'uncorreo@calientemail.com';
let esMayorDeEdad =  true;
let dineroAhorradoUsuario = 20000;
let deudasUsuario = 100;
```

**_Parte 4_**

- **Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:**


```
//Nombre completo (nombre y apellido)
let nombreCompleto =  `${nombreUsuario} ${apellidoUsuario}`;
console.log(nombreCompleto);
```
O también

```
alert(nombreCompleto);
```

```
//Dinero real (dinero ahorrado menos deudas)
let DineriRealUsuario =  dineroAhorradoUsuario - deudasUsuario;
console.log(DineriRealUsuario); 
```
O también
```
alert(DineriRealUsuario);
```


**++Funciones++**

**_Parte 1_**


- **¿Qué es una función?**
Es un bloque de código que se puede rehusar, normalmente una función hace una parte especifica de nuestro código

- **¿Cuándo me sirve usar una función en mi código?**
Cuando se encuentre código que se repite mas de una vez o cuando queremos dividir nuestro código por funcionalidades, un programa que simule una calculadora 
usara funciones para dividir la función de suma, resta, multiplicación y división.

- **¿Cuál es la diferencia entre parámetros y argumentos de una función?**
Los parámetros son las variables que se definen al declara la función y los argumentos son los valores reales de los parámetros


**_Parte 2_**

- **Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:**

```
const mostrarNick = (completeName, nickname) => `Mi nombre es ${completeName} pero prefiero que me digas ${nickname}.`

mostrarNick('Carlos Cardozo', 'Mojojo');
````

**++Condicionales++**

**_Parte 1_**


- **¿Qué es una condicional?**
Es una porción de código que nos ayuda a tomar decisiones basados en los argumentos proporcionados. Los evalúa como true o false.


- **¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?**
Esta if, elseif, else y switch.


- **¿Puedo combinar funciones y condicionales?**
Claro que si, para confirmar si los argumento son nulos o undefined. También si el programa necesita tomar decisiones según los argumentos. 

**_Parte 2_** 
Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = 'Basic';

if(tipoDeSuscripcion === 'Free') {
  console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion === 'Basic') {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion === 'Expert') {
  console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion === 'ExpertPlus') {
  console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
  console.log("No tienes una cuenta Platzi =(");
}
```

**_Parte 3_**

- **Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).**


```
const tipoDeSuscripcion = {
  Free: 'Solo puedes tomar los cursos gratis',
  Basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
  Expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
  ExpertPlus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'
}

const BuscarTipoDeSuscripcion = (suscripcion) => suscripcion ? tipoDeSuscripcion[suscripcion] : 'No tienes una cuenta Platzi =('

 BuscarTipoDeSuscripcion('Expert');

//Para mí es la mejor versión posible en js. Por eso no realice  el bonus.
```


**Ciclos**

**_Parte 1_**


- **¿Qué es un ciclo?**
Es una porción de código que repite n veces cierto código y finaliza según lo hayamos estipulado.


- **¿Qué tipos de ciclos existen en JavaScript?**
Existe el ciclo for, while, do while y foreach


- **¿Qué es un ciclo infinito y por qué es un problema?**
Es cuando nuestro bucle se repite tantas veces que llena la memoria ram de nuestro pc probocando un desbordamiento de la memoria, lo que comunmente se conoce como 'Pantallazo azul =('


- **¿Puedo mezclar ciclos y condicionales?**
Por supuesto, normalmente se hace para buscar un dato o alterar los campos de un array.

**_Parte 2_**

- **Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:**

```
//Primer while:

let i = 0;

while(i < 5) {
  console.log("El valor de i es: " + i);
  i += 1;
}

//Segundo while:

let i = 10;

while(i >= 2) {
  console.log("El valor de i es: " + i);
  i -= 1;
}
```

**_Parte 3_**

- **Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.**

```
const habilidadUsuario = () => {
  let respuesta;

  while(respuesta != 4) {
    respuesta = prompt('¿Cuanto es 2 + 2?');
    if(respuesta != 4) {
      alert(`Tu respuesta es erronea, intetalo nuevamente`);
    } 
  }
  return alert('Claro que si, tu respuesta es correcta');
}
```


**++Listas++**

**_Parte 1_**

**¿Qué es un array?**

Un array es un conjuntos de datos que se encuetran bajo un mismo nombre, en js puede recibir todos los tipos de datos que existen.

**¿Qué es un objeto?**
Un objeto es un conjunto de propiedades, es diferente a los arrays ya que cada uno tiene propiedades especificas, ademas los objetos manejan propiedades que es una asociacion entre clave y un valor (carro: 'red').

**¿Cuándo es mejor usar objetos o arrays?**
Todo depende del tipo de problema que nos enfrentamos, si queremos guardar un conjunto de datos que tiene una relacion entre si (Lista nombres de alumnos), podemos usar una array, pero si a esa lista decimos que cada alumno tiene un nombre, una edad y un codigo, lo mejor es usar objeros.
 
**¿Puedo mezclar arrays con objetos o incluso objetos con arrays?**
Por supuesto, se puede tener un array de objetos por ejemplo arrays de todas las listas de alumnos de un colegio, o un objeto con multiples arrays por ejemplo que ese colegio sea un objeto y una de sus propiedades se alumnos con un array de estudiantes.

**_Parte 2_**


- **Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.**

```
const numerosAleatorios = [5, 9, 8, 6]

const arrayComoParametro = (array) => console.log(array[0]);

arrayComoParametro(numerosAleatorios);
```

**_Parte 3_**

- **Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).**

```
const numerosAleatorios = [5, 9, 8, 6]

const arrayComoParametro = (array) => {
  array.forEach(elemento => {
    console.log(elemento);
  });
}

arrayComoParametro(numerosAleatorios);
```

**_Parte 4_**

- **Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).**

```
  const car = {
  name: 'Model X',
  model: 2021,
  enabled: true,
  color: 'Green',
  min_speed: '670 vc',
  max_speed: '1020 vc'
}

const arrayComoParametro = (object) => {
  for(const property in object) {
    console.log(`${property}: ${object[property]}`);
  }
}

arrayComoParametro(car);
```