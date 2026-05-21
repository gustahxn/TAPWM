//Ex 2
//criando classe pai
class Conta {
  constructor() {
    this._nome = "";
    this._banco = "";
    this._numero = "";
    this._saldo = 0;
  }

  //entrada e saida de dados
  get nome() {
    return this._nome;
  }

  set nome(valor) {
    this._nome = valor;
  }

  get banco() {
    return this._banco;
  }

  set banco(valor) {
    this._banco = valor;
  }

  get numero() {
    return this._numero;
  }

  set numero(valor) {
    this._numero = valor;
  }

  get saldo() {
    return this._saldo;
  }

  set saldo(valor) {
    this._saldo = valor;
  }
}

//classes filhas herdando
class Corrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial = 0;
  }

  get saldoEspecial() {
    return this._saldoEspecial;
  }

  set saldoEspecial(valor) {
    this._saldoEspecial = valor;
  }
}

//classes filhas herdando
class Poupanca extends Conta {
  constructor() {
    super();
    this._juros = 0;
    this._dataVencimento = "";
  }

  get juros() {
    return this._juros;
  }

  set juros(valor) {
    this._juros = valor;
  }

  get dataVencimento() {
    return this._dataVencimento;
  }

  set dataVencimento(valor) {
    this._dataVencimento = valor;
  }
}

//objetos a partir das classes
const contaCorrente = new Corrente();
contaCorrente.nome = prompt("Nome do correntista(Corrente):");
contaCorrente.banco = prompt("Banco:");
contaCorrente.numero = prompt("N da conta:");
contaCorrente.saldo = Number(prompt("Saldo inicial:"));
contaCorrente.saldoEspecial = Number(prompt("Limite especial:"));

const contaPoupanca = new Poupanca();
contaPoupanca.nome = prompt("Nome do correntista(Poupança):");
contaPoupanca.banco = prompt("Banco:");
contaPoupanca.numero = prompt("N da conta:");
contaPoupanca.saldo = Number(prompt("Saldo inicial:"));
contaPoupanca.juros = Number(prompt("Juros:"));
contaPoupanca.dataVencimento = prompt("Data de vencimento:");

//output
alert(`Dados da conta corrente:
  Nome: ${contaCorrente.nome}
  Banco: ${contaCorrente.banco}
  N:  ${contaCorrente.numero}
  Saldo: R$ ${contaCorrente.saldo}
  Limite especial: R$ ${contaCorrente.saldoEspecial}
  `);

alert(`Dados da conta poupança:
  Nome: ${contaPoupanca.nome}
  Banco: ${contaPoupanca.banco}
  N:  ${contaPoupanca.numero}
  Saldo: R$ ${contaPoupanca.saldo}
  Juros: ${contaPoupanca.juros}%
  Vencimento: ${contaPoupanca.dataVencimento}
  `);
