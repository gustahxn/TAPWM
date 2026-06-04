//logica de tornar o radio toggle
let estaPressionado = null;

function toggleBotao(radio) {
  const texto = document.getElementById("texto");
  const textoRec = texto.value;

  //logicas de aplicar texto minus/maius
  if (estaPressionado === radio) {
    radio.checked = false;
    estaPressionado = null;
  } else if (radio.id == "minus") {
    estaPressionado = radio;
    setTimeout(function () {
      alert(textoRec.toLowerCase());
    }, 50);
  } else if (radio.id == "maius") {
    estaPressionado = radio;
    setTimeout(function () {
      alert(textoRec.toUpperCase());
    }, 50);
  }
}
