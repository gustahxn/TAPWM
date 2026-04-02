// calculo
const calcularNotas = () => {
  const nome = prompt("Digite o nome do aluno:");

  // sair se o user cancelar
  if (!nome) return;

  const apenasLetras = /^[a-zA-ZÀ-ÿ\s]+$/;
  if (!apenasLetras.test(nome)) {
    const retry = confirm(
      "Digite apenas letras para o nome! Aperte Ok para tentar novamente.",
    );
    if (retry) calcularNotas();
    return;
  }

  const n1 = parseFloat(prompt("Digite a 1ª nota:"));
  const n2 = parseFloat(prompt("Digite a 2ª nota:"));
  const n3 = parseFloat(prompt("Digite a 3ª nota:"));

  // valida entradas
  if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
    const retry = confirm("Notas inválidas. Ok para tentar novamente.");
    if (retry) calcularNotas();
    return;
  }

  // output
  const avg = (n1 + n2 + n3) / 3;
  alert(`Aluno: ${nome}\nMédia aritmética: ${avg.toFixed(2)}`);

  // reiniciar
  const retry = confirm("Deseja calcular a média de outro aluno?");
  if (retry) calcularNotas();
};

// roda o script depois de carregar a janela
window.addEventListener("load", calcularNotas);
