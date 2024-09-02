console.log("hola munndo");
const arregloNumeros = [1, 2, 3, 4, 5]
console.log(arregloNumeros[4]);

for (let index = 0;  index< arregloNumeros.length; index++) {
  const element = arregloNumeros[index];
  console.log(element)
}


function mayorEdad (edad) {
  if (edad >= 18) {
    console.log("eres mayor de edad");
  } else {
    console.log("no eres mayor de edad");
  }

}
mayorEdad(18);

for (let i = 0; i <= 100; i += 20) {
  console.log(i);
}

for (let i = 100; i >= -100; i += -40) {
  console.log(i);

}

for (let i = 0; i <= 10; i += 3) {
  console.log(i);
}

function sumatorio(inicio, final, operacion) {
  let suma = 0;
  for (let i = inicio; i <= final; i++) {
    suma += operacion(i);
  }
  return suma;
}
console.log(sumatorio(3, 5, function(i){return i}));
console.log(sumatorio(1,100,function(i){return i}));
console.log(
  sumatorio(1, 100, function (i) {
    return i+4;
  })
);


function numerosPrimo(numero) {
  if (numero <= 1) return false;
  if (numero <= 3) return true;

  if (numero % 2 === 0 || numero % 3 === 0) return false;

  for (let i = 5; i * i <= numero; i += 6
  ){
    if (numero % i === 0 || numero % (i + 2) === 0) return false;
  }
  return true;
}

function primosEnRango(inicio, fin) {
  let primos = [];
  for (let i = inicio; i <= fin; i++){
    if (numerosPrimo(i)) {
      primos.push(i)
    }
  }
  return primos;
}
let primos = primosEnRango(1, 10);
console.log(primos);
