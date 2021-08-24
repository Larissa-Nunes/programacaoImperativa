// 14/06/2021
// Closures

function saudacao(nome) {
    let mensagem = "Olá! Seja bem vindo(a)";

    function juntarNome() {
        return `${mensagem}, ${nome}!`;
    }

    return juntarNome();
}

console.log(saudacao("Larissa"));
console.log(saudacao("Lia"));