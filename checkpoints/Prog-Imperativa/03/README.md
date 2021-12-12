# Checkpoint 03 - Programação Imperativa - Digital House

Enviado em: 12/12/2021

---

## Descrição:

([Link do documento](https://docs.google.com/document/d/1eogP8YTM-zfPFqy4MMadArEM314Dxvq1/edit#))

### RESUMO:

#### Objetivos

Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar um pouco com exercícios que dependem da etapa anterior para manter uma linha de trabalho.
_Importante: Ao final, lembre-se de enviar o código completo para o Github, compartilhando o link do projeto com seus professores._

- **Passo 1 (1,5 pontos)**

  Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

- **Passo 2 (1,5 pontos)**

  Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.

- **Passo 3 (1,5 pontos)**

  Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

- **Passo 4 (1,5 pontos)**
  Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

- **Passo 5 (2 pontos)**

  Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

- **Passo 6 (2 pontos)**

  Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
