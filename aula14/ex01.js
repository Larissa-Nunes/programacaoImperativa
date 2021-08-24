// AULA 14 - JSON
// 07/07/2021

//desserialização ou parsing
let dadosConvertidosJs = JSON.parse(dadosJson); //converter em objeto literal em JS
//converter em objeto literal em JS
let dadosJson = '{"nome": "Larissa", "sobrenome": "Nunes", "Sexo":"Feminino"}';
console.log(dadosJson);
//Json é um objeto nativo
//console.log(dadosConvertidosJs);
//console.log(dadosConvertidosJs.nome.toUpperCase);
//conversão JSON para um objeto JS -- término

//serialização cria um objeto JSON
//conversão JSON para um objeto JS
let novoDadoJson = JSON.stringify(dadosConvertidosJs); //converter JS p/ JSON
console.log(novoDadoJson);
//término

let objetoLiteral = {materia: 'Prog. Imperativa', professor: 'William'};
objetoLiteral.professor=objetoLiteral.professor.toUpperCase();
console.log(objetoLiteral.professor);

let objetoConvertidoJSON = JSON.stringify(objetoLiteral);
console.log(objetoConvertidoJSON);

