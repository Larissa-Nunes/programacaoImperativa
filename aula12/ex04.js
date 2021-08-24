// Aula 12 - 30/06/2021
// ex04Reduce.js
// reduce: método que reduz a matriz a um unico valor. Executa uma função fornecida para cada valor da matriz
// O valor do retorno da função é armazenado em um acumulador (resultado / total)

const numeros = [1, 2, -3, 4, 5, 8, 7, 8, 9, 19]
let resultado = numeros.reduce(function(acumulador, item) {
    return acumulador+item;
})
console.log(resultado);
