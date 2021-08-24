// Spread - util para quebrar um array;

function somar (x, y, z) {
    return x + y + z;
}

const numeros = [1, 2, 3];

console.log('Total......'+somar(...numeros));

console.log('Maior numero......'+Math.max(...numeros));

console.log('Menor numero......'+Math.min(...numeros));

let nome = 'Larissa';
let sobrenome = 'Nunes';
// com o spread operator ele junta os dois

let nomeCompleto = [nome, sobrenome];
console.log(...nomeCompleto);