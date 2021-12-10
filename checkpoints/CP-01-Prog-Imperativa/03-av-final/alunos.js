// Construtor de objetos Aluno
function Aluno(nome, qtdFaltas, notas = []) {
  this.nome = nome;
  this.qtdFaltas = qtdFaltas;
  this.notas = notas;
  this.calcularMedia = () => {
    let notas = this.notas;
    return (
      notas.reduce(function(somatorio, nota) {
        return somatorio + nota;
      }) / notas.length
    );
  };

  this.faltas = () => ++this.qtdFaltas;

  // this.calcularMedia = () => {
  //   media = 0;
  //   for (let nota of notas) {
  //     media += nota;
  //   }
  //   return media;
  // };
}

// Instânciando um objeto Alunos
let aluno_brenno = new Aluno("Brenno Pereira Machado", 1, [9, 9, 10]);

// Testes
/* 
console.log(aluno_brenno.faltas());
console.log(aluno_brenno.qtdFaltas);
console.log(aluno_brenno.notas);
console.log(aluno_brenno.calcularMedia()); */

module.exports = Aluno;