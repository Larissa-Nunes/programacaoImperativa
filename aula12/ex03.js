// Aula 12 - 30/06/2021
// ex03Filter.js
// filter : cria um array preenchido com todos os elementos do array que passam em um teste(fornecido por uma função)

// objetivo: filtrar de acordo com uma condição
const numeros = [1, 2, -3, 4, 5, 8, 7, 8, 9, 10];

const numerosMaiores = numeros.filter(item=>item>0);

console.log(numerosMaiores);