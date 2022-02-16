function adicionar(...numeros) {
    let soma = 0;
    for (const n of numeros) {
        soma += n;
    }
    return soma;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    return a / b;
}

function quadradoDoNumero(a) {
    return multiplicacao(a, a);
}

function mediaDeTresNumeros(a, b, c) {
    return adicionar(a, b, c) / 3;
}

function calculaPorcentagem(total, porcentagem) {
    return divisao(multiplicacao(total, porcentagem), 100);
}

function geradorDePorcentagem(fracao, total) {
    return divisao(multiplicacao(fracao, 100), total)
}

console.log("-------------- Teste de Operações / Calculadora --------------")
a = 20
b = 10
c = 90

console.log(`Teste da função adicionar(${a},${b}): ${adicionar(a,b)}\n`);
console.log(`Teste da função subtracao(${a},${b}): ${subtracao(a,b)}\n`);
console.log(`Teste da função multiplicacao(${a},${b}): ${multiplicacao(a,b)}\n`);
console.log(`Teste da função divisao(${a},${b}): ${divisao(a,b)}\n`);

console.log(`Teste da função quadradoDoNumero(${b}): ${quadradoDoNumero(b)}\n`);
console.log(`Teste da função mediaDeTresNumero(${a},${b},${c}): ${mediaDeTresNumeros(a,b,c)}\n`);
console.log(`Teste da função calculaPorcentagem(${adicionar(a,b,c)},${a}): ${calculaPorcentagem(adicionar(a,b,c),a)}\n`);
console.log(`Teste da função geradorDePorcentagem(${c},${adicionar(a,b,c)}): ${geradorDePorcentagem(c,adicionar(a,b,c))}\n`);