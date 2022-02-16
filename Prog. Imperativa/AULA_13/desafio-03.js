/* Calculadora de notas
Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
- Número
- Número do arquivo
- Lista de notas
Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota de aprovação que será dada. 
Para este exercício vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.
 */

function Aluno(nome, num, num_arquivo, notas = []) {
  this.nome = nome;
  this.num = num;
  this.num_arquivo = num_arquivo;
  this.notas = notas;
  this.calcula_aprovacao = function(minima = 5) {
    num_notas = this.notas.length;
    media = 0;
    for (let i = 0; i < num_notas; i++) {
      media += this.notas[i];
    }
    media /= num_notas;

    if (media >= minima) {
      estado = "aprovado";
    } else {
      estado = "reprovado";
    }

    aprovacao = { media: media, estado: estado };
    return aprovacao;
  };
}

let alunos = [new Aluno("Brenno", 01, 01, [10, 7, 5, 10, 8])];

console.log(alunos[0]);
// Se a média mínima é 9
console.log("Aprovação com média mínima 9");
console.log(alunos[0].calcula_aprovacao(9));

// Se a média mínima é 5
console.log("Aprovação com média mínima 5");
console.log(alunos[0].calcula_aprovacao());