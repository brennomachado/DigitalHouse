// Trabalhando com arrays

let numeros = [1, 2, 5];
numeros[0] = "a";
numeros[1] = "b";
numeros[2] = "Digital House";

//adicionar com push
numeros.push(200);
let variavel = "CTD";
numeros.push(variavel);

//extrair pop shift
let removidos = [];

console.log(numeros);

//removendo de "numeros" e adicionando em "removidos" 3 vezes
for (var i = 0; i < 3; i++) {
  removidos.push(numeros.pop());
}

console.log(numeros);
console.log(removidos);
