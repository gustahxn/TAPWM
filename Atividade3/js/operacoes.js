// maths
const rodarOperacoes = () => {
  const n1 = parseFloat(prompt("Digite o primeiro número:"));
  const n2 = parseFloat(prompt("Digite o segundo número:"));

  // busca por nums validos
  if (isNaN(n1) || isNaN(n2)) {
    const retry = confirm("Digite apenas números. Ok para tentar novamente.");
    if (retry) rodarOperacoes();
    return;
  }

  // impede divisao por zero
  const divResult =
    n2 !== 0 ? (n1 / n2).toFixed(2) : "Erro (divisão por zero não permitida)";
  const modResult = n2 !== 0 ? n1 % n2 : "erro";

  const results = `
        Números escolhidos: ${n1} e ${n2}
        ------------------------------
        Soma: ${n1 + n2}
        Subtração: ${n1 - n2}
        Produto: ${n1 * n2}
        Divisão: ${divResult}
        Resto da divisão: ${modResult}
    `;

  // exibe resultados
  alert(results.trim().replace(/^ +/gm, ""));

  // reiniciar
  const retry = confirm("Deseja realizar novos cálculos?");
  if (retry) rodarOperacoes();
};

// roda o script depois de carregar a janela
window.addEventListener("load", rodarOperacoes);
