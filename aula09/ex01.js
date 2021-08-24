// Aula 09 - 16/06/2021
// 280, 330, 1500
// Margem de lucro: 50%
// Lista de valores de custo dos produtos
// Lista de valores de venda ao consumidor

let precoCusto = [280, 330, 1500, 3300, 150];
let margemLucro = 1.5;

function custoInicial(precoCusto){
    console.log("\n******Relatório Preço Custo******");
    for(let i = 0; i < precoCusto.length; i++){
       console.log("Posição do array é:"+ i +" - "+precoCusto[i])
    }
}
custoInicial(precoCusto);

function precoVenda(precoCusto){
    console.log("\n******Relatório Preço Venda******");
    for(let i = 0; i < precoCusto.length; i++){
        let resultado = precoCusto[i]*margemLucro;
       console.log("Preço de venda é:"+ i +" - "+resultado*margemLucro)
    }
}
precoVenda(precoCusto);