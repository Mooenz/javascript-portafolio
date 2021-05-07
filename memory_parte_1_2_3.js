/**Memory_1: Crea un código que te muestre 4 caracteres entre los siguientes de forma aleatoria: "#$%()/& */
/**Memory_2: Lleva un registro del Orden en el que aparecieron los caracteres. */
/**Memory_3: Dale al usuario un menú para que elija en el orden correcto los caracteres.*/

class Memory {
  constructor() {
    this.caracteres = ['"', '#', '$', '%' ,'(' ,')' ,'/', '&'];
    this.posicionCaracteres = [];
  }

  generar4Caracteres() {  
    for (let indice = 0; indice < 4; indice += 1) {
      let posicion = Math.floor(Math.random() * 8);
      this.posicionCaracteres.push(posicion);
    }
  }

  mostrarMenuCaracteres() {
    let mensaje = 
    `Ruerda muy bien el orden:
    1. ${this.caracteres[this.posicionCaracteres[0]]}
    2. ${this.caracteres[this.posicionCaracteres[1]]}
    3. ${this.caracteres[this.posicionCaracteres[2]]}
    4. ${this.caracteres[this.posicionCaracteres[3]]}`

    alert(mensaje);
  }

  mostrarMenuAdivinar() {
    let solucion = 
    `Ingresa el orden de los caracteres:
    0. ${this.caracteres[0]}
    1. ${this.caracteres[1]} 
    2. ${this.caracteres[2]}
    3. ${this.caracteres[2]}
    4. ${this.caracteres[3]}
    5. ${this.caracteres[4]}
    6. ${this.caracteres[5]}
    7. ${this.caracteres[6]}`

    solucion = prompt(solucion);
   
    solucion = solucion.split("").map((numero) => parseInt(numero));
    
    if( solucion[0] == this.posicionCaracteres[0] && solucion[1] == this.posicionCaracteres[1] && solucion[2] == this.posicionCaracteres[2] && solucion[3] == this.posicionCaracteres[3] && solucion[4] == this.posicionCaracteres[4]) {
      alert('La solicion es correscta');
    } else {
      alert(`Fallaste, la respuesta correcta era: ${this.posicionCaracteres.join(',')}`)
    }
  }
}

const memory = new Memory;

memory.generar4Caracteres();
memory.mostrarMenuCaracteres();
memory.mostrarMenuAdivinar()
