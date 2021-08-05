// DOM : llamar campos del html
let salario = document.getElementById("salario");
let horasDiariasLaborales = document.getElementById("horas-diarias-laborales");

// Constantes
const VALORDIALABORADA = salario / 30 / horasDiariasLaborales;

const RECARGO = {
  extraDiurno: 1.25,
  extraNocturno: 1.75,
  extraDiurnoDominical: 2,
  extraNocturnoDominical: 2.5,
};

// Calcular horas extras llegan por parametros
const calcularHorasExtras = ({ horas, tipoRecargo }) => {
  const valorTotalHorasExtras = [];
  if (RECARGO) {
    const valorHoraExtra = VALORDIALABORADA * RECARGO[tipoRecargo] * horas;
    valorTotalHorasExtras.push(valorHoraExtra);
  }

  return valorTotalHorasExtras.reduce((a, b) => {
    return a + b;
  });
};

// Enviar argumentos
calcularHorasExtras();
