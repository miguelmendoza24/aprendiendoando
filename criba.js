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

function obtenerNumerosPrimos(numero) {
  let lista = crearList(numero);
  let numerosPrimos = [];
  let primerNun = lista[0];
  numerosPrimos.push(primerNun);
  lista = filtrarNumeros(lista, primerNun);
  
  while ((primerNun ** 2) < numero) {
    primerNun = lista[0];
    numerosPrimos.push(primerNun);
    lista = filtrarNumeros(lista, primerNun);
  }
  return [...numerosPrimos, ...lista]
}
console.log(obtenerNumerosPrimos(500));