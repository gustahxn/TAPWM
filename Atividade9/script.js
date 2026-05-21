//puxa e declara os dados via id
const dadoAltura = document.getElementById("alturaInput");
const dadoPeso = document.getElementById("pesoInput");
const botaoEnviar = document.getElementById("enviarBtn");
const outputDiv = document.getElementById("outputDiv");
const botaoLimpar = document.getElementById("limparBtn");

//formata o input (mascara)
dadoAltura.addEventListener("input", function () {
  let v = this.value.replace(/\D/g, ""); //pegar tudo que nao for numero

  if (v.length > 1) {
    this.value = v[0] + "." + v.substring(1, 3);
  }
});

//calcula imc
function calcularImc(peso, altura) {
  let imc = peso / (altura * altura);
  return imc;
}

//botao limpar
botaoLimpar.addEventListener("click", function () {
  dadoAltura.value = "";
  dadoPeso.value = "";
  outputDiv.innerHTML = "";
});

//botao enviar
botaoEnviar.addEventListener("click", function () {
  const altura = Number(dadoAltura.value);
  const peso = Number(dadoPeso.value);

  //chamar function do imc
  const outputImc = calcularImc(peso, altura);

  let classificacao = "";

  if (outputImc < 18.5) {
    classificacao = "Magreza - 0";
  } else if (outputImc <= 24.9) {
    classificacao = "Normal - 0";
  } else if (outputImc <= 29.9) {
    classificacao = "Sobrepeso - 1";
  } else if (outputImc <= 39.9) {
    classificacao = "Obesidade - 2";
  } else {
    classificacao = "Obesidade grave - 3";
  }

  //exibir
  outputDiv.innerHTML =
    "Seu IMC é " + outputImc.toFixed(2) + " - " + classificacao;
});
