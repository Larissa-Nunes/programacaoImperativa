let aluno = {
    nome: "",
    faltas: 0,
    notas: [],
    calcularMedia: () => this.notas.reduce((a, b) => a + b) / this.notas.length,
    faltas: () => this.faltas++
}

function novoAluno(name, faltas, notas) {
    return {
        nome: '$(nome)',
        faltas: faltas,
        notas: notas,
        calcularMedia: function() {
            return this.notas.reduce((a,b) => a + b) / this.notas.length
        },
        faltas: () => this.faltas++
    }
}

let aluno1 = new novoAluno("João", 1, [10, 7]);

let alunos = [];

module.exports = aluno;