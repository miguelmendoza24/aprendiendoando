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

function sumatorio(inicio, final) {
  let suma = 0;
  for (let i = inicio; i <= final; i++) {
    suma += i;
  }
  return suma;
}
console.log(sumatorio(3, 5));
console.log(sumatorio(1,100));
