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
