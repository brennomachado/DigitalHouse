/* Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
você deve exibir a string &quot;Digital&quot; em vez do número.
● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
você deve exibir a string &quot;House&quot; em vez disso.
● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
deve exibir a string &quot;Digital House&quot; em vez do número. */

function digitalHouse(a, b) {
  console.log("oi");
  for (let i = 1; i < 101; i++) {
    let divisivel_por_a = i % a;
    let divisivel_por_b = i % b;
    if (divisivel_por_a == 0 && divisivel_por_b == 0) {
      console.log("Digital House");
    } else if (divisivel_por_a == 0) {
      console.log("Digital");
    } else if (divisivel_por_b == 0) {
      console.log("House");
    } else {
      console.log(i);
    }
  }
}

digitalHouse(8, 9);