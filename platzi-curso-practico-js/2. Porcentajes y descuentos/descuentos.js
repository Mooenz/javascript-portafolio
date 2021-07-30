const cupones = {
  'Sin descuento': 0,
  '5%': 5,
  '15%': 15,
  '25%': 25,
  '30%': 30,
  '40%': 40 
}

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
}

function onClickButtonPriceDescount() {
  const resultP = document.getElementById("resultP");

  const inputPrice = document.getElementById("inputPrice");
  const priceValue = inputPrice.value;

  const inputDescount = document.getElementById("inputDiscount");
  const descountValue = inputDescount.value;

  const cupon = document.getElementById("cupon");
  const cuponValue = cupon.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, descountValue);
  const precioConDescuentoCupon = calcularPrecioConDescuento(precioConDescuento, cupones[cuponValue]);
  
  if(cupones[cuponValue] == 0) {
    return resultP.innerText = `El precio con descuento es: $${precioConDescuento}`; 
  } else {
    return resultP.innerText = `
    El precio con descuento y el descuento del cupo es $${precioConDescuentoCupon}
    `; 
  }
}

