// Aula 03 - 31/05/2021
// ex08.js

let nomeJogador = "Ronaldo";
let golsJogador = 1000;
let precoEmDolares = 100000000;

function fazerGol(){
    console.log()
    golsJogador++;
    console.log("GOL!!!!!!")
    precoEmDolares = precoEmDolares + 10000
    return console.log(nomeJogador + " tem " + golsJogador + " gols e está valendo " + precoEmDolares + " dólares ");
}

fazerGol();
fazerGol();
fazerGol();
fazerGol();
fazerGol();