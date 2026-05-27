//declarando
const janela = document.getElementById("janelaF");
const botaoResetar = document.getElementById("botaoResetar");
let titulo = "";
let estaQuebrada = false;

//passar mouse em cima
janelaF.onmouseover = function () {
  this.src = "./img/janelaAberta.jpg"; //aplica img
  document.getElementById("titulo").textContent = "Janela Aberta"; //h1
};

//tirar mouse da janela
janelaF.onmouseout = function () {
  this.src = "./img/janelaFechada.webp";
  document.getElementById("titulo").textContent = "Janela Fechada";
};

//clickar na janela
janelaF.onmousedown = function () {
  this.src = "./img/janelaQuebrada.png";
  document.getElementById("titulo").textContent = "Janela Quebrada";
  estaQuebrada = true;

  //desativa hover e out
  this.onmouseout = null;
  this.onmouseover = null;
};

botaoResetar.addEventListener("click", () => {
  janela.src = "./img/janelaFechada.webp";
  document.getElementById("titulo").textContent = "Abra a JANELA";
});
