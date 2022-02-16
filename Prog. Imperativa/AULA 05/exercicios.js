function teste_funcoes(funcoes, parametros) {
    for (i = 0; i < funcoes.length; i++) {
        console.log(`Teste da Função ${funcoes[i].name}():`)
        console.log(`    Entrada: ${parametros[i]}`)
        console.log(`    Saída: ${funcoes[i](parametros[i])}\n\n`)

    }
}

/* Exercício 1.
Crie uma função que converta polegadas em centímetros. 
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros. */
let polegada_em_cm = function(pol) { return pol * 2.54; }

/* Exercícios 2
Crie uma função que receba uma string e a converta em um URL.
ex: "funcaojs" é retornado como "http://www.funcaojs.com.br" */
let converte_para_url = function(texto) { return `http://${texto}.com.br` }


/* Exercício 3
Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ). */
let coloca_exclamacao = function(texto) { return `${texto}!` }


/* Exerício 4
Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.*/
let idade_de_cao = function(idade_canina) { return idade_canina * 7 }

/* Exercício 5
Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.*/
let valor_hora_de_trabalho = function(salario_mensal, horas_diarias = 8, dias_de_trabalho = 21) { return (salario_mensal / dias_de_trabalho) / horas_diarias; }

/* Exercício 6
Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas.
Em seguida, execute a função, testando diferentes valores. */
let imc = function(altura, peso) { return peso / ((altura / 100) ** 2); }

/* Exercício 7
Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
Investigue o que o método de .toUpperCase() faz. */
let converte_em_maiusculas = function(texto) { return texto.toUpperCase(); }

/* Exerício 8 
Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
Dica: Isso te ajudará a entender o que o operador typeof faz. */
let tipo_de_dado = function(dado) { return typeof(dado); }

/* Exerício 9
Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi. */
let calcula_circuferencia = function(raio) { return 2 * Math.PI * raio; }

array_de_funcoes = [
    polegada_em_cm,
    converte_para_url,
    coloca_exclamacao,
    idade_de_cao,
    valor_hora_de_trabalho,
    imc, converte_em_maiusculas,
    tipo_de_dado,
    calcula_circuferencia
];


array_de_parametros = [
    1,
    "funcaojs",
    "frase que agora terá exclamação",
    10,
    1045,
    (180, 100), // I need to fix it, didn't work
    "frase que agora será tudo maiúscula",
    20,
    10
]

teste_funcoes(array_de_funcoes, array_de_parametros)