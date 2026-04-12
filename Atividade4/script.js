// mapeamento das jogadas com icones font awesome
const JOGADAS = {
  1: { nome: "Pedra", icone: "fa-hand-back-fist" },
  2: { nome: "Papel", icone: "fa-hand" },
  3: { nome: "Tesoura", icone: "fa-hand-scissors" }
};

// icone padrao exibido antes da primeira jogada
const ICONE_PADRAO = '<i class="fa-solid fa-question"></i>';

// elementos do DOM
const iconeJogador = document.getElementById("icone-jogador");
const iconeComputador = document.getElementById("icone-computador");
const textoResultado = document.getElementById("texto-resultado");
const pontosJogador = document.getElementById("pontos-jogador");
const pontosComputador = document.getElementById("pontos-computador");
const pontosEmpate = document.getElementById("pontos-empate");
const botoesOpcao = document.querySelectorAll(".botao-opcao");
const botaoReiniciar = document.getElementById("btn-reiniciar");

// placar
let placar = { jogador: 0, computador: 0, empate: 0 };

// gera a escolha do computador entre 1 e 3
function gerarEscolhaComputador() {
  return Math.floor(Math.random() * 3) + 1;
}

// determina o resultado comparando as escolhas
function determinarResultado(escolhaJogador, escolhaComputador) {
  if (escolhaJogador === escolhaComputador) return "empate";

  const jogadorVence =
    (escolhaJogador === 1 && escolhaComputador === 3) ||
    (escolhaJogador === 2 && escolhaComputador === 1) ||
    (escolhaJogador === 3 && escolhaComputador === 2);

  return jogadorVence ? "vitoria" : "derrota";
}

// retorna a mensagem adequada ao resultado
function gerarMensagem(resultado, nomeJogador, nomeComputador) {
  if (resultado === "empate") return "Empate! Ambos escolheram " + nomeJogador;
  if (resultado === "vitoria") return "Voce venceu! " + nomeJogador + " vence " + nomeComputador + ".";
  return "Voce perdeu! " + nomeComputador + " vence " + nomeJogador + ".";
}

// monta o html do icone a partir da classe font awesome
function montarIconeHtml(classeIcone) {
  return '<i class="fa-solid ' + classeIcone + '"></i>';
}

// atualiza os valores do placar na tela
function atualizarPlacar() {
  pontosJogador.textContent = placar.jogador;
  pontosComputador.textContent = placar.computador;
  pontosEmpate.textContent = placar.empate;
}

// aplica animacao nos icones da arena
function animarIcones() {
  iconeJogador.classList.add("animando");
  iconeComputador.classList.add("animando");

  setTimeout(function () {
    iconeJogador.classList.remove("animando");
    iconeComputador.classList.remove("animando");
  }, 400);
}

// executa uma rodada completa do jogo
function jogar(escolhaJogador) {
  const escolhaComputador = gerarEscolhaComputador();
  const jogadaJogador = JOGADAS[escolhaJogador];
  const jogadaComputador = JOGADAS[escolhaComputador];

  // atualiza os icones na arena
  iconeJogador.innerHTML = montarIconeHtml(jogadaJogador.icone);
  iconeComputador.innerHTML = montarIconeHtml(jogadaComputador.icone);
  iconeJogador.classList.add("ativo");
  iconeComputador.classList.add("ativo");
  animarIcones();

  // determina e exibe o resultado
  const resultado = determinarResultado(escolhaJogador, escolhaComputador);
  textoResultado.textContent = gerarMensagem(resultado, jogadaJogador.nome, jogadaComputador.nome);
  textoResultado.className = "resultado " + resultado;

  // incrementa o placar
  if (resultado === "vitoria") placar.jogador++;
  else if (resultado === "derrota") placar.computador++;
  else placar.empate++;

  atualizarPlacar();
}

// reinicia o placar e a interface
function reiniciarPlacar() {
  placar = { jogador: 0, computador: 0, empate: 0 };
  atualizarPlacar();
  iconeJogador.innerHTML = ICONE_PADRAO;
  iconeComputador.innerHTML = ICONE_PADRAO;
  iconeJogador.classList.remove("ativo");
  iconeComputador.classList.remove("ativo");
  textoResultado.textContent = "Faca sua escolha abaixo:";
  textoResultado.className = "resultado";
}

// registra os eventos de clique
botoesOpcao.forEach(function (botao) {
  botao.addEventListener("click", function () {
    jogar(Number(botao.dataset.escolha));
  });
});

botaoReiniciar.addEventListener("click", reiniciarPlacar);
