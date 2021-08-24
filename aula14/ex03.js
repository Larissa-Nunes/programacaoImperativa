// 07/07/2021
// AUla14 - JSON
// ex03.js
// Objetivo da aplicação: Escrevendo arquivos (teste.txt)
// fs = file system
// apaga o arquivo que já existe (sobreescreve o arquivo)

const fs=require('fs');
let frutas = '{"fruta":"banana", "Preço":8.50, "Tipo":["prata", "maçã", "nanica", "da terra", "ouro"], "origem": "Brasil"}';

fs.writeFileSync('teste.txt', frutas);

//ler o arquivo
let lerJson = fs.readFileSync('teste.txt', 'utf-8');
console.log(lerJson);

//converter objJSON para objjs

let converterLerJson = JSON.parse(lerJson);
console.log(converterLerJson);
