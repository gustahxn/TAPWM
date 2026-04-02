// calculo
const calculateGrades = () => {
  const name = prompt("Digite o nome do aluno:");

  // sair se o user cancelar
  if (!name) return;

  const g1 = parseFloat(prompt("Digite a 1ª nota:"));
  const g2 = parseFloat(prompt("Digite a 2ª nota:"));
  const g3 = parseFloat(prompt("Digite a 3ª nota:"));

  // valida entradas
  if (isNaN(g1) || isNaN(g2) || isNaN(g3)) {
    alert("Notas inválidas inseridas. A operação foi cancelada.");
    return;
  }

  // output
  const mean = (g1 + g2 + g3) / 3;
  alert(`Aluno: ${name}\nMédia aritmética: ${mean.toFixed(2)}`);

  // reiniciar
  const retry = confirm("Deseja calcular a média de outro aluno?");
  if (retry) calculateGrades();
};

// roda o script depois de carregar a janela
window.addEventListener("load", calculateGrades);
