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
     verificarAprovacao: function (aluno) {
    if (aluno.calcularMedia() >= curso.notaAprovacao && aluno.quantidadefaltas <= curso.faltasMax) {
      return true;
    } else if (aluno.quantidadefaltas == curso.faltasMax && aluno.calcularMedia() >= (1.1 * curso.notaAprovacao)){
      return true;
  }else{
    return false;
  }
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

