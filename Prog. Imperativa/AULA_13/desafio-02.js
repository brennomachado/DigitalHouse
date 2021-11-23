/* Propriedade Única
Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string.
Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string.  
exemplo: 
let array = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ]
propriedadeUnica(array, "idade") deve retornar [ { idade: 27 }, { idade: 49 } ]
propriedadeUnica(array, "nome") deve retornar [ { nome: "Lean"}, { nome: "Eze" } ] */

function propriedadeUnica(dados, propriedade) {
  tamanho_array = dados.length;

  let array_novo_objeto = [];
  for (let i = 0; i < tamanho_array; i++) {
    let novo_objeto = {
      [propriedade]: dados[i][propriedade],
    };
    array_novo_objeto.push(novo_objeto);
  }
  return array_novo_objeto;
}

let array = [
  { nome: "Lean", idade: 27 },
  { nome: "Eze", idade: 49 },
];
console.log(propriedadeUnica(array, "nome"));

/* 
    // console.log(Object.getOwnPropertyNames(array[0]));
    // console.log(Object.keys(array[0])); */