// Micro desafio - Passo 1
// Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

function Alunos(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;

// Passo 2
// Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
    this.calcularMedia = (notas) => {
        let resultado = this.notas.reduce((acumulador, item)=>acumulador+item)/this.notas.length;
        return resultado.toFixed(1); //arredondar numeros
    }

    this.adicionarFaltas = () => this.faltas +-1;
}

module.exports=Alunos;