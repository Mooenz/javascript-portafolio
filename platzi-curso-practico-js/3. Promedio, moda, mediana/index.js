const array = document.getElementById("array");
const respuesta = document.getElementById("respuesta");

const arrayNumeros = [];

const agregarNumeroArray = () => {
  const inputNumero = document.getElementById("input-numeros");
  const valueNumero = inputNumero.value;

  arrayNumeros.push(parseInt(valueNumero));
  
  
  return array.innerHTML = `${arrayNumeros}`;
}

const onclikCalcularPromedio = () => {
  const promedio = calcularMediaAritmetica(arrayNumeros);

  return respuesta.innerHTML = `El promedio es: ${promedio}`;
}

const onclikCalcularModa = () => {
  const moda = calcularModa(arrayNumeros);

  return respuesta.innerHTML = `La moda es: ${moda}`;

}

const onclikCalcularMediana = () => {
  const mediana = calcularMediana(arrayNumeros);

  return respuesta.innerHTML = `La mediana es: ${mediana}`;
}