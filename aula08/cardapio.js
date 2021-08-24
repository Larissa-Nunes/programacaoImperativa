// Função construtora

function Restaurante (nome , cardapio) {

    this.nome = nome;
    this.cardapio = cardapio;

    this.entrada = function (){
        
        return msg = "Bem vindo ao Restaurante ${nome} \n Nosso cardápio:";
    }
}

console.log(Restaurante("Larissa", cardapio));