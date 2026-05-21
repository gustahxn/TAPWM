//puxa e declara os dados via id
const alturaInput = document.getElementById("alturaInput");
const baseInput = document.getElementById("baseInput");
const botaoEnviar = document.getElementById("botaoEnviar");
const outputDiv = document.getElementById("outputDiv");
const botaoLimpar = document.getElementById("botaoLimpar");

//Ex 1
function Retangulo(b, a) {
  this.b = b;
  this.a = a;

  this.calcularArea = function () {
    return this.b * this.a; //usando this para pegar os valores ja passados
  };
}
//this se usa dentro da função construtora, mas não fora dela

//botao limpar
botaoLimpar.addEventListener("click", function () {
  alturaInput.value = "";
  baseInput.value = "";
  outputDiv.innerHTML = "";
});

//botao Enviar
botaoEnviar.addEventListener("click", function () {
  const b = Number(baseInput.value);
  const a = Number(alturaInput.value);

  //usa a função construtora Retangulo para criar o objeto ret
  const ret = new Retangulo(b, a);
  //usa o metodo de calcular e armazena o resultado
  const area = ret.calcularArea();

  outputDiv.innerHTML = "A área do retângulo é: " + area;
  console.log("A área do retângulo é: " + area); //exibindo tanto no console quanto no HTML
});
