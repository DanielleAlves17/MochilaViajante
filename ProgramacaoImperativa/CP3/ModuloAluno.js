function Alunos(nome, quantidadefaltas, notas) {
    this.nome = nome;
    this.quantidadefaltas = quantidadefaltas;
    this.notas = notas;
    this.calcularMedia = function () {
        let media = this.notas.reduce((total, valor) => total + valor) / this.notas.length;
        return media
    }
    this.faltasTotais = function () {
        this.quantidadefaltas++;
    }
}



module.exports = Alunos
