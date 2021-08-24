// Data: 12/07/2021
// Aula 15 - Promises
// ex02SetTimeOut.js
// Esperando por um tempo limite

console.log("Requisição em Andamento...")
setTimeout(
function() {
    funcaoConectar("Server Conectado - OK")
}, 2000); //2000 ciclos = 2s

function funcaoConectar(value) {
    console.log(value);
}
