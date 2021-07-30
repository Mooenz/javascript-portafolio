//cuadrados
console.group('Cuadrados');

const perimetroCuadrado = (lado) => lado * 4; 
const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

//triangulos
console.group('Triangulos');

const perimetroTriangulo = (lado1, lado2, base) => lado1 + lado2 + base;
const areaTriangulo = (base, altura) =>  (base * altura) / 2;

console.groupEnd();

//círculos
console.group('Círculos');

const PI = Math.PI;

const diametroCirculo = (radio) => radio * 2;
const perimetroCirculo = (diametro) => diametroCirculo(diametro) * PI;
const areaCirculo = (radio) => (radio * radio) * PI;

console.groupEnd();

//Interacion con el html

//Cuadrado
const answerCuadrado = document.getElementById("answer-cuadrado");


const calcularPerimetroCuadrado = () => {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  
  return answerCuadrado.innerHTML = `${perimetro} Cm`;
}

const calcularAreaCuadrado = () => {
  const input = document.getElementById("input-cuadrado");
  const value = input.value;

  const area = areaCuadrado(value)

  return answerCuadrado.innerHTML = `${area}  Cm^2`;
}



//Triangulo
const answerTriangulo = document.getElementById("answer-triangulo");

const calcularPerimetroTriangulo = () => { 
  const ladoUno = document.getElementById("input-lado1");
  const ladoDos = document.getElementById("input-lado2");
  const base = document.getElementById("input-base");
  const valueLado1 = ladoUno.value;
  const valueLado2 = ladoDos.value;
  const valueBase = base.value; 

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);

  return answerTriangulo.innerHTML = `${perimetro} Cm`;
}
const calcularAreaTriangulo = () => {
  const base = document.getElementById("input-base");
  const altura = document.getElementById("input-altura");
  const valueBase = base.value;
  const valueAltura = altura.value;

  const area = areaTriangulo(valueBase, valueAltura);

  return answerTriangulo.innerHTML = `${area} Cm^2`;
}



//Circulo
const answerCirculo = document.getElementById("answer-circulo");

const calcularPerimetroCirculo = () => {
  const radio = document.getElementById("input-circulo")
  const valueRadio = radio.value;

  const perimetro = perimetroCirculo(valueRadio);

  return answerCirculo.innerHTML = `${perimetro} Cm`;  
}

const calcularAreaCirculo = () => {
  const radio = document.getElementById("input-circulo")
  const valueRadio = radio.value;

  const area = areaCirculo(valueRadio);

  return answerCirculo.innerHTML = `${area} Cm^2`;
}

//triangulo isoseles 

const calcularALturaTrianguloIsoseles = (lado1 ,lado2, area) => {
  if(lado1 == lado2) {
    const altura = Math.pow(lado1, 2) - Math.pow(area/2, 2);
    return Math.sqrt(altura);
  } else {
    return 'No es un triangulo isoseles';
  }
}