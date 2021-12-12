let Alunos = require("./alunos");

let curso = {
  // Valores de incializacão padrão mas que podem ser alterados acessando as propriedades
  nome: "Programação Imperativa",
  nota_aprovacao: 7,
  faltas_max: 5,
  estudantes: [],
  adiciona_estudante: function(aluno, qtdFaltas, notas) {
    this.estudantes.push(new Alunos(aluno, qtdFaltas, notas));
  },
  verifica_aprovacao: function(aluno) {
    for (let estudante of this.estudantes) {
      if (estudante.nome === aluno) {
        let media = estudante.calcularMedia();
        if (this.faltas_max === estudante.qtdFaltas) {
          if (media > this.nota_aprovacao * 1.1) return true;
        } else if (
          media >= this.nota_aprovacao &&
          estudante.qtdFaltas < this.faltas_max
        ) {
          return true;
        }
      }
    }
    return false;
  },
  lista_aprovados: function() {
    let lista_de_aprovados = [];
    for (let aluno of this.estudantes) {
      lista_de_aprovados.push(this.verifica_aprovacao(aluno.nome));
    }
    return lista_de_aprovados;
  },
};

//#### TESTES ####//

// TESTE 01: Objeto literal curso sem nenhum aluno
console.log(
  `### TESTE 01: Criação do objeto literal curso sem nenhum aluno ###`
);
console.log(curso);

// TESTE 02:  Inserindo 4 estudantes
console.log(`\n### TESTE 02: Inserindo 4 alunos ###`);
curso.adiciona_estudante("Brenno", 1, [8, 10, 9]);
curso.adiciona_estudante("Marie Currie", 1, [7, 7, 7]);
curso.adiciona_estudante("Newton", 5, [7, 7, 7]);
curso.adiciona_estudante("Einstein", 1, [0, 5, 4]);
console.log(curso.estudantes);

// TESTE 03: Verifica aprovação por nome
console.log(`\n### TESTE 03:  Verifica aprovação por nome ###`);
console.log(`   Busca por Newton`);
console.log(curso.verifica_aprovacao("Newton"));
console.log(`\n   Busca por Marie Currie`);
console.log(curso.verifica_aprovacao("Marie Currie"));
console.log();

// TESTE 04: Lista de aprovados do curso inteiro em ordem de entrada.
console.log("TESTE 04: Array com lista de aprovados");
console.log(curso.lista_aprovados());