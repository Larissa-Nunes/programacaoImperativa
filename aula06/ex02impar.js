// Aula 06 - 09/06/2021
// Repetições for
// 1 resto dividido por 2; ! = diferente

exibirTipo(10);

function exibirTipo(limite) {
    for(let i=0; i<limite; i++) {
        if (i%2!=0) {
        console.log(i + "ÌMPAR");
    }
    else {
        console.log(i + "PAR")
    }
}
}