const Alunos = require("./ModuloAluno"); //construtora

const estudantes = require("./Alunos"); //objeto

let curso = {
    nomeCurso : "SofrendocomJS.js",
    notaAprovacao : 7,
    faltasMax: 6,
    listaEstudantes: estudantes,
    addAluno : function(Aluno){
        this.listaEstudantes.push(Aluno)
    },
    verificarAprovacao: function(Aluno){ 
      return Aluno.qntFaltas < this.faltasMax && Aluno.calcularMedia() >= this.notaAprovacao ? true : Aluno.qntFaltas === this.faltasMax ? Aluno.calcularMedia().toFixed(1) >= parseFloat(this.notaAprovacao * 1.10).toFixed(1) : false; 
    },
    alunosAprovados : function(){
        let isAprovados = []
        this.listaEstudantes.forEach((obj, index) => {
          isAprovados[index] = this.verificarAprovacao(obj);
        })
        return isAprovados;
    }

}  
//Add Aluno
curso.addAluno(new Alunos("Lucrecia Borgia", 0, [6.0,6.0]))
//Aprovação
console.log(curso.verificarAprovacao(curso.listaEstudantes[0])); 
//Boleano
console.log(curso.alunosAprovados());

