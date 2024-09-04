/*Quiero crear una función para la sucesión de Fibonacci que reciba 2 parámetros, un arreglo con la semilla y un número que indica cuántas posiciones serán inferidas a partir de la semilla. Ejemplo:

crearSucesion([2,3], 5)

Se espera este resultado:
2,3,5,8,13,21,34*/
function crearSucesion(semilla, interacciones) {
  let Fibonacci = [...semilla]
  for (let i = 0; i<interacciones; i++) {
    let siguiente = Fibonacci[Fibonacci.length - 1] +
      Fibonacci[Fibonacci.length - 2]
    Fibonacci.push(siguiente);
  }
  return Fibonacci;
}
console.log(
  crearSucesion([2, 3], 5));
 
  