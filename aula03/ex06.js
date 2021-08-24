// Aula 03 - 31/05/2021
// ex06.js
// Cálculo IMC


function calcularIndiceDeMassaCorporal(peso, altura){
    return(peso / (altura * altura));
}

console.log(calcularIndiceDeMassaCorporal(62, 1.67));
console.log(calcularIndiceDeMassaCorporal(63, 1.68));
console.log(calcularIndiceDeMassaCorporal(64, 1.69));
console.log(calcularIndiceDeMassaCorporal(79, 1.80));