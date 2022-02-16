/* Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo) */

function Conta(numero, tipo, saldo, titular) {
  this.conta = numero;
  this.tipo = tipo;
  this.saldo = saldo;
  this.titular = titular;
}

let nova = new Conta(5486273622, "Conta Corrente", 27771, "Abigael Natte");

let dados = [
  [5486273622, "Conta Corrente", 27771, "Abigael Natte"],
  [1183971869, "Conta Poupança", 8675, "Ramon Connell"],
  [9582019689, "Conta Poupança", 27363, "Jarret Lafuente"],
  [1761924656, "Conta Poupança", 32415, "Ansel Ardley"],
  [7401971607, "Conta Poupança", 18789, "Jacki Shurmer"],
  [630841470, "Conta Corrente", 28776, "Jobi Mawtus"],
  [4223508636, "Conta Corrente", 2177, "Thomasin Latour"],
  [185979521, "Conta Poupança", 25994, "Lonnie Verheijden"],
  [3151956165, "Conta Corrente", 7601, "Alonso Wannan"],
  [2138105881, "Conta Poupança", 33196, "Bendite Huggett"],
];

contas = [];

for (let i = 0; i < dados.length; i++) {
  contas.push(new Conta(dados[i][0], dados[i][1], dados[i][2], dados[i][3]));
}

let banco = {
  clientes: contas,
  consultarCliente: function(nome) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titular === nome) return this.clientes[i];
    }
    return 0; // caso não encontre nenhum cliente com mesmo nome retorna 0
  },
  deposito: function(nome, valor) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titular === nome) {
        this.clientes[i].saldo += valor;
        console.log(
          `Depósito realizado, seu novo saldo é: ${this.clientes[i].saldo}`
        );
        break;
      }
    }
  },
  saque: function(nome, valor) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].titular === nome) {
        if (this.clientes[i].saldo >= valor) {
          this.clientes[i].saldo -= valor;
          console.log(
            `Extração feita com sucesso, seu novo saldo é: ${this.clientes[i].saldo}`
          );
        } else {
          console.log(`Fundos insuficientes`);
        }
        break;
      }
    }
  },
};

//console.log(contas);
console.log(banco.consultarCliente("Alonso Wannan"));
banco.deposito("Alonso Wannan", 1000);
banco.saque("Alonso Wannan", 5000);
banco.saque("Alonso Wannan", 5000);