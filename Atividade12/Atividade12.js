//declarando
const janela = document.getElementById("janela");
const botaoResetar = document.getElementById("botaoResetar");
let titulo = "";
let estaQuebrada = false;

//movimentos que o mouse vai fazer
function eventosMouse() {
  janela.onmouseover = function () {
    //passar mouse em cima
    this.src = "./img/janelaAberta.jpg"; //aplica img
    document.getElementById("titulo").textContent = "Janela Aberta"; //h1
  };

  //tirar mouse da janela
  janela.onmouseout = function () {
    this.src = "./img/janelaFechada.webp";
    document.getElementById("titulo").textContent = "Janela Fechada";
  };

  janela.onmousedown = function () {
    this.src = "./img/janelaQuebrada.png";
    document.getElementById("titulo").textContent = "Janela Quebrada";
    estaQuebrada = true;

    //desativa hover e out
    this.onmouseout = null;
    this.onmouseover = null;
  };
}

eventosMouse();

//clickar na janela

botaoResetar.addEventListener("click", () => {
  janela.src = "./img/janelaFechada.webp";
  document.getElementById("titulo").textContent = "Abra a JANELA";
  
  estaQuebrada = false;
	
  //resetando os movimentos do mouse
  eventosMouse();
});
