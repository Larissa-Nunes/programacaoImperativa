// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

const Alunos = require('./1construtorAluno')
function Curso(nomeCurso, notaAprovacao, faltasMaxima, listaEstudantes) {
    this.nomeCurso = nomeCurso;
    this.notaAprovacao = notaAprovacao;
    this.faltasMaxima = faltasMaxima;
    this.listaEstudantes = listaEstudantes;

// Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.
    this.adicionarAlunos = (array) => this.listaEstudantes.push(array); 
}

// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
this.verificarAprovacao = (aluno) =>{
    if(this.notaAprovacao){

    } else {
        
    }
}