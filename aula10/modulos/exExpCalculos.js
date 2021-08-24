// // Aula 09 - 21/06/2021
// Fora da pasta módulos
// exExpCalculos.js

module.exports.soma=(a,b)=> a+b;

module.exports.subtracao=(a,b) => a-b;

module.exports.multiplicacao=(a,b) => a*b;

module.exports.divisao=(a,b) => {
    if(b!=O) {
        return a/b;
    } else {
        return 'Impossível dividir por Zero';
    }
}