function crearList(fin) {
  let list =[]
  for (let i = 2; i <= fin; i++) {
    list.push(i) 
  }
  return list;
}
console.log(crearList(100));

