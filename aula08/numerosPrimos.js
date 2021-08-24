// Crie um array numerosPrimos e atribua alguns valores a ele que correspondam ao seu nome. Além disso, crie outro array, desta vez chamado numeros, que deve conter os valores do array numerosPrimos adicionados através do spread, juntos com outros números.

let numerosPrimos = [2, 3, 5, 7, 11, 13];
let outrosNumeros = [17, 19, 23, 29, 31, 37];

let numeros = [...numerosPrimos, ...outrosNumeros];

console.log(numeros);