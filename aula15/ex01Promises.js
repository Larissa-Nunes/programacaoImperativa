// Data: 12/07/2021
// Aula 15 - Promises
// O que são Promises?
// É um objeto JS que vincula:
// 1 - a produção do código
// 2 - o consumo do código
// Propriedades do objeto Promise
// Pendente / realizada / rejeitada

function meuVerificador(resposta) {
    console.log(resposta);
}

let minhaPromessa = new Promise(
    function(Resolve, Reject) {
        let x = 10;
        if(x == 0) {
            Resolve("Tudo OK")
        } else {
            Reject("Deu erro")
        }
    }
);
minhaPromessa.then(
    function(Resolve){
        meuVerificador(Resolve)
    }).catch((Reject) => {
        console.log(Reject)
});
    
