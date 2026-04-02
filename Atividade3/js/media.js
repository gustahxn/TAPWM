// calculo
const calculateGrades = () => {
  const name = prompt("digite o nome do aluno:");

  // sair se o user cancelar
  if (!name) return;

  const g1 = parseFloat(prompt("digite a 1ª nota:"));
  const g2 = parseFloat(prompt("digite a 2ª nota:"));
  const g3 = parseFloat(prompt("digite a 3ª nota:"));

  // valida entradas
  if (isNaN(g1) || isNaN(g2) || isNaN(g3)) {
    alert("notas inválidas inseridas. a operação foi cancelada.");
    return;
  }

  // output formatado
  const mean = (g1 + g2 + g3) / 3;
  alert(`aluno: ${name}\nmédia aritmética: ${mean.toFixed(2)}`);

  // reiniciar
  const retry = confirm("deseja calcular a média de outro aluno?");
  if (retry) calculateGrades();
};

// roda o script depois de carregar a janela
window.addEventListener("load", calculateGrades);
