// Aula 05 -  Fundamentos sobre funções no JavaScript

// Declaração de funções
function comprarComida(quantidade = 0) {
    //console.log(quantidade)
    const preco = quantidade * 12;
    return preco;
}

function darDesconto(preco) {
    const desconto = preco * 0.7;
    return desconto;
}

/* Chamando ou invocando a função */
const retornoPreco = comprarComida(2);
const retornoDesconto = darDesconto(retornoPreco);
console.log(`Preço inicial: R$ ${retornoPreco.toFixed(2)} Preço com desconto: R$ ${retornoDesconto.toFixed(2)}`)