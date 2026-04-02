// maths
const runOperations = () => {
  const n1 = parseFloat(prompt("digite o primeiro número:"));
  const n2 = parseFloat(prompt("digite o segundo número:"));

  // busca por nums validos
  if (isNaN(n1) || isNaN(n2)) {
    alert("valores inválidos. digite apenas números.");
    return;
  }

  // impede divisao por zero
  const divResult =
    n2 !== 0 ? (n1 / n2).toFixed(2) : "erro (divisão por zero não permitida)";
  const modResult = n2 !== 0 ? n1 % n2 : "erro";

  const results = `
        números escolhidos: ${n1} e ${n2}
        ------------------------------
        soma: ${n1 + n2}
        subtração: ${n1 - n2}
        produto: ${n1 * n2}
        divisão: ${divResult}
        resto da divisão: ${modResult}
    `;

  // exibe resultados
  alert(results.trim().replace(/^ +/gm, ""));

  // reiniciar
  const retry = confirm("deseja realizar novos cálculos?");
  if (retry) runOperations();
};

// roda o script depois de carregar a janela
window.addEventListener("load", runOperations);
