//jeito 1
const pessoa1 = {
    nome: 'Gustavo',
    idade: 18,
    hobby: 'Escutar música'
};//jeito 1
const pessoa1 = {
    nome: 'Gustavo',
    idade: 18,
    hobby: 'Escutar música'
};

//jeito 2
const pessoa2 = new Object();

pessoa2.nome = 'Gustavo';
pessoa2.idade = 18;
pessoa2.hobby = 'Jogar videogames';

//jeito 3
const pessoa3 = Object.create(objOrg, { 
    nome: { value: 'Gustavo'},
    idade: { value: 18},
    hobby: { value: 'Caminhar'}
});

//jeito 4
function Pessoa(nomePessoa, idadePessoa, hobbyPessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
    this.hobby = hobbyPessoa;
}

const pessoa4 = new Pessoa('Gustavo', 18, 'Tocar guitarra');

//jeito 5


//jeito 2
const pessoa2 = new Object();

pessoa2.nome = 'Gustavo';
pessoa2.idade = 18;
pessoa2.hobby = 'Jogar videogames';

//jeito 3
const pessoa3 = Object.create(objOrg, { 
    nome: { value: 'Gustavo'},\\
    idade: { value: 18},
    hobby: { value: 'Caminhar'}
});

//jeito 4
function criarPessoa(nomePessoa, idadePessoa, hobbyPessoa) {
    this.nome = nomePessoa;
    this.idade = idadePessoa;
    this.hobby = hobbyPessoa;
}

const pessoa4 = new Pessoa4('Gustavo', 18, 'Tocar guitarra');
