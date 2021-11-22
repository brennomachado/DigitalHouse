/* somaArray()... Reloaded
Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez
vamos modificá-lo para que ele possa receber um array de números de qualquer
quantidade de elementos.
Se você não se lembrar da instrução original:
Você deve criar uma função somaArray que aceita uma matriz de números e retorna
a soma de todos eles.

exemplo:
● somaArray([1,2,3]) // 6
● somaArray([10, 3, 10, 4]) // 27
● somaArray([-5,100]) // 95 */

function somaArray(array) {
  soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma = soma + array[i];
  }
  return soma;
}

const teste_1 = somaArray([1, 2, 3]); // 6
const teste_2 = somaArray([10, 3, 10, 4]); // 27
const teste_3 = somaArray([-5, 100]); // 95

console.log(`Resultado dos testes: ${teste_1}, ${teste_2}, ${teste_3}`);