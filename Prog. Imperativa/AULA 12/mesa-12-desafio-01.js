/* Desafio 01 - Sistema de Votação
É necessário determinar o vencedor de um concurso de Stand-Up composto por 3
apresentações por participante.
O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final
de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e
desce.
Após a apresentação, o público vota indicando quem eles acham que ganhou aquela
rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a
terceira.
A matriz de Alice é: alice = [ 23, 82, 46 ]
A matriz de Bob é: bob = [ 45, 8, 32]

Tendo em mente os enunciados e como funciona o sistema de pontos, devemos
calcular e encontrar o vencedor utilizando uma estrutura for que evite ter que calcular
cada rodada separadamente, lembre-se de usar as estruturas if/else, se necessário,
para comparar os votos de cada participante. */

const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
  let pontos_participante_a = 0;
  let pontos_participante_b = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      pontos_participante_a++;
    } else if (b[i] > a[i]) {
      pontos_participante_b++;
    }
  }
  if (pontos_participante_a == pontos_participante_b) {
    return `Empate`;
  } else if (pontos_participante_a > pontos_participante_b) {
    return `A`;
  } else {
    return `B`;
  }
}

console.log("O ganhador é: " + encontrarGanhador(alicia, bob));