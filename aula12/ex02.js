// Aula 12 - 30/06/2021
// ex02Map.js
// map - método que cria uma nova matriz com os resultados da chamada de uma função, para cada elemento da matriz

// com arrow function
let salarios = [1050.75, 2000.78, 5000.98, 7500.89];
let reajuste = elemento => elemento*1.4;
let salariosAtualizados = salarios.map(reajuste);

// function reajuste(elemento) {
//     return elemento*1.4;
// }

console.log(salarios);
console.log(salariosAtualizados);