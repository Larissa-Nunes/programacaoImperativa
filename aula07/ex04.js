// 14/06/2021
// Recursividade

function decrementar(numero) {
    console.log(numero)
    
    numero--
    
    if (numero > 0) {
        decrementar(numero)
    } 
}

decrementar(10)