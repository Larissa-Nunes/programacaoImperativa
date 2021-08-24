let alunos = require('./modulos/aluno.js');

const curso = {
    nomeDoCurso: "",
    notaDeAprovação: 0,
    faltasMaximas: 0,
    listaDeEstudantes: [],
    somarAluno: function(aluno) {
        return this.listaDeEstudantes.push(aluno);
    }
}

curso.somarAluno(aluno1);

console.log(curso.listaDeEstudantes);