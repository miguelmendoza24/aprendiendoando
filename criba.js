function crearList(fin) {
  let list = [];
  for (let i = 2; i <= fin; i++) {
    list.push(i);
  }
  return list;
}

function filtrarNumeros(listaCompleta, numeroFilter) {
  const result = listaCompleta.filter((numero) => numero % numeroFilter !== 0);
  return result;
}

let numerosPrimos = [];
let lista = crearList(100);

let primerNun = lista[0];
numerosPrimos.push(primerNun);
console.log(primerNun);

lista = filtrarNumeros(lista, primerNun);

console.log(primerNun);

while (lista.length > 0) {
  primerNun = lista[0];
  numerosPrimos.push(primerNun);
  lista = filtrarNumeros(lista, primerNun);
  console.log(lista);
  console.log(numerosPrimos);
}

