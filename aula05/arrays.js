// Aula 05
// 07/06/2021
// arrays

let compras = ["Arroz", "Feijão", "Salmão"];

//push - insere elemento no final do array
compras.push("Picanha");
console.log(compras)

//pop - elimina elemento no final do array
compras.pop();
console.log(compras)

//shift - elimina o primeiro elemento do array
compras.shift();
console.log(compras)

//unshift - insere um ou dois elementos ao início do array
compras.unshift("Macarrão", "Banana"); 
console.log(compras)

//join - junta os elementos do array
let lista = compras.join();
console.log(lista)
